$(function() {
	$(".slider-wrap").each(function(index, val) {
		var That = this;

		this.prev = $(this).find(".prev");
		this.next = $(this).find(".next");
		this.ul = $(this).find(".content-wrap");
		this.li_len = this.ul.find("li").length;
		this.li_width = this.ul.find("li").eq(0).outerWidth(true);

		this.now = 0;
		this.move_length = 2;//每次移动的宽度个数
		this.visible_max = 4;//可视区的宽度个数

		this.move = function(type) {
			if (type === "prev") {
				if (That.now - That.move_length >= 0) {
					That.now -= That.move_length;
				} else {
					That.now = 0;
				}
			} else {
				if (That.now + That.visible_max < That.li_len) {
					That.now += That.move_length;
				}
			}

			var move = That.now * That.li_width * -1 + "px";
			That.ul.animate({"left": move}, "fast");
		};

		//动态设置ul的宽度
		var ulWidth = this.li_len * this.li_width + "px";
		this.ul.css("width", ulWidth);

		this.prev.on('click', function() {
			That.move("prev");
		});

		this.next.on("click", function() {
			That.move("next");
		});
	});
});