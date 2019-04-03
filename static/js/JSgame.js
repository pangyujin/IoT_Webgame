$(function() {
	var count = 0;

	var arr = new Array();
	for (var k = 0; k < 5; k++) {
		arr[k] = new Array();
		for (var h = 0; h < 5; h++) {
			arr[k][h] = false;
		}
	}

	var textarr = [
		["A", "B", "C", "F", "R"],
		["Q", "J", "A", "X", "D"],
		["W", "X", "O", "B", "C"],
		["A", "D", "W", "L", "B"],
		["R", "C", "Q", "V", "A"],
	]

	var arrLength;
	function draw(arr) {
		$(".Containers").empty();
		for (var i = 0; i < arr.length; i++) {
			var parent = $(".Containers").append("<div></div>").children("div").eq(i).addClass("Rows");
			for (var j = 0; j < arr[i].length; j++) {
				var temp = $(".Containers").children(".Rows").eq(i)
					.append("<div></div>")
					.find("div").eq(j).addClass("Boxes").addClass(function() {
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
				var temp = $(".Containers").children(".Rows").eq(i).children("div").eq(j)
				.append("<p></p>")
				var tempp = $(".Containers").children(".Rows").eq(i).children("div").eq(j).children("p")
				.addClass("TEXT")
				.append(textarr[i][j])
			}
		}

		$(".Boxes").on("click", function() {
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
		// console.log(arrLength);
		// console.log(arr);
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

		count += 1;
		console.log('count: ' + count);
		if (count == 2){
			alert("Hint 1:\n Caesar Cipher Decoding example:\n key=1 CDEFG -> BCDEF\n\nHint 2:\n Unknowns: What are the common unknowns in maths?")
		}
		if (count >= 5){
			alert("Hint 1:\n Choose Key=3. Decode the letters on the bulb\n\nHint 2:\n After Decoding, remove all 'X' 'Y' 'Z', click the rest bulbs")
		}

	})

	draw(arr);

})
