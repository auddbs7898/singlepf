/* var depth = 0;
var now = 0;
var end = $(".slide").length - 1;
$(".slide").each(function(){
	if(depth < $(this).css("z-index")) depth = $(this).css("z-index");
});
depth++;
ani();
function ani() {
	$(".slide").eq(now).css({"z-index":depth++, "opacity":0});
	$(".slide").eq(now).delay(3000).animate({"opacity":1}, 1000, function(){
		if(now == end) now = 0;
		else now++;
		ani();
	});
} */

var FadeSlide = (function(){
    function FadeSlide(slides, options){
        var obj = this;
      this.slides = slides,
      this.delay = options.delay,
      this.speed = options.speed;
      this.now = 0;
      this.end = this.slide.length -1;
      this.depth = 0;
      this.init(obj);
    }
    FadeSlide.prototype.init = function(obj){
        obj.slide.each(function(){
            if(obj.depth < $(this).css("z-index")) obj.depth = $(this).css("z-index");
        });
        obj.depth++;
        obj.ani(obj);
    }
    FadeSlide.prototype.ani = funtion(obj){
        var target = obj.slide.eq(obj.now)
        target.css({"z-index":obj.depth++, "opacity":0});
        target.delay(3000).animate({"opacity":1}, 1000, function(){
            if(obj.now == obj.end) now = 0;
            else obj.now++;
            ani();
	});
    }
    return FadeSlide;
}());//객체는 대문자로 만드는게 좋다