
///顶部hover start

$(function(){
	var time;
	// console.log($(`.toubu2`))
    $(`.toubu2`).hover(function(){   ///
	time=setTimeout(()=>{
		$(this).find(`div`).show();
	},300)
	
    },function(){
	clearTimeout(time)
	$(this).find(`div`).hide();
   })
})
//////top   hover   end
$(function(){
	var t;

	$(`.banner121`).hover(function(){
		var index=$(this).index();
      t=setTimeout(()=>{
      	
      	// console.log($(this).parents().find(`.liebiao2`).find(`ul`).eq(index))
         // $(this).parents().find(`liebiao2`).find(`ul`).eq(index).show();
      $(`.liebiao2>ul`).eq(index).show();
      } ,200)
	},function(){
		clearTimeout(t)
	    var index=$(this).index();
		// $(`.liebiao2>ul`).
		
         // if($(`.liebiao2>ul`).eq(index).hover()){
         // 	$(`.liebiao2>ul`).eq(index).hover(function(){
         //  	t=setTimeout(function(){
         //       $(this).show();
         //  	}, 100)
         //  },function(){
         //  	clearTimeout(t);
         //  	$(this).hide();
            
         //  })
         // } 
        // else{
           $(`.liebiao2>ul`).eq(index).hide();
        // }
	})
})
$(function(){
	var now=0;
	var next=0;
    var t;
	function move(){
		next=now+1;
		if(next>5){
          next=0;
		}
		// console.log(now,next)
		$(`.lunbodian`).eq(now).removeClass(`lunbodian1`)
		$(`.lunbodian`).eq(next).addClass(`lunbodian1`)
		// $(`.banner11>li`).eq(now).removeClass("bannerxian")
		// $(`.banner11>li`).eq(next).addClass("bannerxian")
		$(`.banner11>ul>li`).eq(now).animate({opacity:0})
		$(`.banner11>ul>li`).eq(next).animate({opacity:1})
		
		now=next;

	}
    t=setInterval(move, 2000) 
	$(`.banner11>ul`).hover(function(){
         clearInterval(t)
	},function(){
      t=setInterval(move, 2000) 
	})
})
//node 
$(function(){
	$(".jianright").click(function(){
		$(".main1212ul").animate({left:-488})
		$(".jianright").removeClass("jianxian")
		$(".jianleft").addClass("jianxian")
	})
	$(".jianleft").click(function(){
		$(".main1212ul").animate({left:0});
		$(".jianleft").removeClass("jianxian")
		$(".jianright").addClass("jianxian")
	})
})  
//right fixed  
$(function(){
	$(".fud").hover(function(){
		// console.log($(this).find(".fudong-1x"))
		$(this).find(".fudong-1x").show().animate({right:35})
	},function(){
		$(this).find(".fudong-1x").hide().animate({right:55});
	})
})
$(function(){
	var current=0;
	var flag1=true;
	var flag2=false;
	$(window).scroll(function(e){
		var height=$(window).scrollTop()
        // console.log(height)
        // console.log($(".zhengwen").eq(0).offset().top)

		if(height>=1532){
			if(flag1){
				flag1=false;
				$(".fudong-2").animate({width:35,height:320},function(){
					flag2=true;
				});
				$(".fudong-3").animate({top:0})
			}
			
		}else if(height<1532){
			if(flag2){
				flag2=false;
				$(".fudong-2").animate({width:0,height:0},function(){
					flag1=true;
				});
				$(".fudong-3").animate({top:-150})
			}
			
		}
     // console.log($(".zhengwen"))
		$(".zhengwen").each(function(index){
            // console.log($(".fudong-2>li"))
			if($(this).offset().top-100<=$(window).scrollTop()){
               current=$(this).index(".zhengwen");
               // console.log(current)
               $(".fudong-2>li").each(function(){                    
               	$(this).removeClass("fudong-2bg")
               })
               $(".fudong-2>li").eq(current).addClass("fudong-2bg")
			}
		})
	});
	//return top
	$(".fanhui").click(function(){
		$(window).scrollTop(0);
	})
	$(".fud>div:last").click(function(){
		$(window).scrollTop(0);
	})
	// console.log($(".fud>div").eq(7))
	//  any where  
	$(".fudong-2>li").each(function(index,value){
		$(this).click(function(){
		$(".fudong-2>li").each(function(){                    
             $(this).removeClass("fudong-2bg")
           })  
		console.log();
        $("body").animate({scrollTop:$(".zhengwen").eq(index).offset().top});
	current=index;
	})
	})
	$(".fudong-2>li").hover(function(){
		$(this).addClass("fudong-2bg");
	},function(){
		if($(this).index()==current+1){
              return;
		}else{
			$(this).removeClass("fudong-2bg");
		}
			
		}		
	)
})
