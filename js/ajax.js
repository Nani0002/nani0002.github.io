window.addEventListener("load", init, false);

function init() {
	$.ajax({
		url: "https://baconipsum.com/api/?type=all-meat",
		type: "GET",
		success: function (response) {
			alert(response);			
		},
		error: function (xhr) {
			let response = JSON.parse(xhr.responseText);
			if (xhr.status === 422) {
				handleAjaxErrors(xhr.responseJSON.errors);
			} else if (xhr.status === 401 && response.redirect) {
				window.location.href = response.redirect;
			} else {
				alert("An error occurred: " + response.error);
			}
		},
	});
}
