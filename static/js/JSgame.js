$(function() {
	var arr = new Array();
	for (var k = 0; k < 5; k++) {
		arr[k] = new Array();
		for (var h = 0; h < 5; h++) {
			arr[k][h] = false;
		}
	}

	var textarr = [
		["A", "A", "B", "F", "R"],
		["Q", "J", "B", "X", "D"],
		["W", "X", "O", "C", "C"],
		["A", "D", "W", "L", "A"],
		["R", "B", "Q", "V", "C"],
	]

	var arrLength;
	function draw(arr) {
		$(".Containers").empty();
		for (var i = 0; i < arr.length; i++) {
			var parent = $(".Containers").append("<div></div>").children("div").eq(i).addClass("row");
			for (var j = 0; j < arr[i].length; j++) {
				var temp = $(".Containers").children(".row").eq(i)
					.append("<div></div>")
					.find("div").eq(j).addClass("box").addClass(function() {
						if (!arr[i][j]) {
							return "unselected";
						} else {
							return "selected";
						}
					})
					.attr("value", arr[i][j])
					.attr("position", i + "," + j)
			}
		}

		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j< arr[i].length; j++) {
				var temp = $(".Containers").children(".row").eq(i).children("div").eq(j)
				.append("<p></p>")
				var tempp = $(".Containers").children(".row").eq(i).children("div").eq(j).children("p")
				.addClass("TEXT")
				.append(textarr[i][j])
			}
		}

		$(".box").on("click", function() {
			var posArr = $(this).attr("position").split(",");
			var x = +posArr[0];
			var y = +posArr[1];

			if (undefined !== arr[x - 1]) {
				if (undefined !== arr[x - 1][y]) {
					arr[x - 1][y] = !arr[x - 1][y];
				}
			}
			if (undefined !== arr[x + 1]) {
				if (undefined !== arr[x + 1][y]) {
					arr[x + 1][y] = !arr[x + 1][y];
				}
			}
			if (undefined !== arr[x]) {
				if (undefined !== arr[x][y - 1]) {
					arr[x][y - 1] = !arr[x][y - 1];
				}
			}
			if (undefined !== arr[x]) {
				if (undefined !== arr[x][y + 1]) {
					arr[x][y + 1] = !arr[x][y + 1];
				}
			}
			arr[x][y] = !arr[x][y];
			draw(arr);
		});

		arrLength = arr.length;
	}

	$(".check").on("click", function() {
		var flag = true;
		for (var n = 0; n < arr.length; n++) {
			for (var m = 0; m < arr[n].length; m++) {
				if (!arr[n][m]) {
					flag = false;
				}
			}
		}
		if (flag) {
			alert("You did it!!");
			window.location.href="/Oo0ooO0o0On";
		} else {
			alert("Wrong! Try again");
			console.log("wrong");
		}
	})

	$(".retry").on("click", function() {
		console.log(arrLength);
		console.log(arr);
		// console.log('jQuery ver：' + $.fn.jquery);
		var reTryArr = [];
		for (var k = 0; k < arrLength; k++) {
			reTryArr[k] = [];
			for (var h = 0; h < arrLength; h++) {
				reTryArr[k][h] = false;
			}
		}
		arr = reTryArr;

		draw(arr);
	})

	draw(arr);

})
