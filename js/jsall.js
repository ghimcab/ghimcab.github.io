!function(e,t)
	{
	"use strict";
	t.ajaxSetup(
		{
		type:"GET",dataType:"json"
	}
	),t.fn.scrollFocus=function(e,a,r)
		{
		t("html,body").animate(
			{
			scrollTop:t(this).offset().top
		}
		,e||"slow",a,r)
	};
	var a=
		{
		init:function()
			{
			this.$channelTabs=t("#channel .tabs div"),this.$tabContents=t("#channel .content ul"),this.$channels=this.$tabContents.find("a"),this.$breadcrumb=t("ol.breadcrumb"),this.$content=t("#content"),this.$comment=t("#comment"),this.registerTabs(),this.registerImageLazyload(),this.registerChannels(),this.registerServers(),this.autoChooseServer()
		}
		,registerServers:function()
			{
			var a=this;
			t(document).delegate(".play","click",function(e)
				{
				a.autoChooseServer()
			}
			),t("#server .server").click(function(r)
				{
				r.preventDefault();
				var n=t("#server .server"),i=t(this),s=i.data("player")+"?token="+e.REQUEST_TOKEN+"&s="+Math.random();
				n.removeClass("active").filter(i).addClass("active"),a.verifyToken(function()
					{
					t("#player").html(a.getIframe(s))
				}
				)
			}
			)
		}
		,autoChooseServer:function()
			{
			var e=t("#server .server"),a=e.filter(".active");
			a.length||(a=e.filter.first()),a.click()
		}
		,verifyToken:function(a)
			{
			var r=e.token_verified||0;
			r+6e5<(new Date).getTime()?t.ajax(
				{
				url:"token/verify",data:
					{
					token:e.REQUEST_TOKEN
				}
				,success:function(t)
					{
					t?(e.token_verified=(new Date).getTime(),a.call()):e.location.reload()
				}
				,error:function()
					{
					e.location.reload()
				}
			}
			):a.call()
		}
		,registerChannels:function()
			{
			var e=this;
			e.$channels.click(function(a)
				{
				a.preventDefault();
				var r=t(this);
				e.$channels.removeClass("active").filter(r).addClass("active"),e.$breadcrumb.scrollFocus(),t.ajax(
					{
					url:r.attr("href"),success:function(t)
						{
						t.error?alert(t.message):(document.title=t.pageTitle,e.pushHistoryState(r),e.applyBreadcrumb(t.channelInfo),e.$content.html(t.data),e.registerServers(),e.autoChooseServer(),e.loadComment(r))
					}
				}
				)
			}
			)
		}
		,loadComment:function(e)
			{
			var t=e.attr("href");
			this.$comment.html('<div class="fb-comments" data-href="'+t+'" data-width="100%" data-numposts="8" data-colorscheme="light" data-order-by="reverse_time"></div>');
			try
				{
				FB.XFBML.parse(this.$comment[0])
			}
			catch(a)
				{
				console.log(a)
			}
		}
		,applyBreadcrumb:function(e)
			{
			var a=this.$breadcrumb.find("li"),r=t("<li />");
			t("<a />").attr("href",e.link).attr("title",e.full_name).text(e.full_name).appendTo(r);
			a.length>1&&this.$breadcrumb.find("li:last-child").remove(),this.$breadcrumb.append(r)
		}
		,pushHistoryState:function(t)
			{
			if("function"==typeof e.history.pushState)
				{
				var a=t.attr("href");
				e.history.pushState(
					{
					name:t.data("key")
				}
				,document.title,a)
			}
		}
		,registerImageLazyload:function()
			{
			this.$tabContents.find("img").unveil()
		}
		,registerTabs:function()
			{
			var e=this;
			e.$channelTabs.click(function()
				{
				var a=t(this);
				e.$channelTabs.removeClass("active").filter(a).addClass("active"),e.$tabContents.slideUp("fast").filter('[data-key="'+a.data("key")+'"]').slideDown("fast").find("img").trigger("unveil")
			}
			)
		}
		,getIframe:function(e,t,a,r)
			{
			return'<iframe width="'+(t||"100%")+'" height="'+(a||"100%")+'" src="'+e+'" '+(r||"")+' frameborder="0" scrolling="no"></iframe>'
		}
	};
	jQuery(document).ready(function(e)
		{
		a.init();
		var t=0,r=setInterval(function()
			{
			30==++t&&clearInterval(r),e("img").each(function(t,a)
				{
				var r=e(this);
				r.hasClass("captcha")||(1==r.attr("width")||1==r.attr("height")||1==parseInt(r.css("width"),10)||1==parseInt(r.css("height"),10))&&r.hide()
			}
			)
		}
		,500)
	}
	)
}
(this,jQuery);

//--Facebook Like
jQuery(window).load(function(){
	var likeboxWidth=jQuery('#facebook-likebox').width();
	jQuery('#facebook-likebox').html('<iframe id="facebook-likebox-frm" src="http://www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/Xemtivinet-1654520927902593/&amp;width='+likeboxWidth+'&amp;height=200&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;border_color=%234B4F55&amp;header=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:'+likeboxWidth+'px;  height:150px; margin-bottom: -10px; border-bottom: 0px solid #4B4F55;margin-top: 10px" allowTransparency="true"></iframe>');
	jQuery('#facebook-likebox-frm').load(function(){
		jQuery('#facebook-likebox').css('display','none');
		jQuery('#facebook-likebox').removeClass('preload');
		jQuery('#facebook-likebox').slideDown('slow');
	});
});