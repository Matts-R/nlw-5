const btnIcon = $("#btn_chat_icon");

btnIcon.addEventListener("mouseover", () => {
	if (btnIcon.classList.contains("_animation_hoverout")) {
		$("#btn_chat_icon").classList.remove("_animation_hoverout");
	}

	$("#btn_chat_icon").classList.add("_animation_hover");
});

btnIcon.addEventListener("mouseleave", () => {
	if (btnIcon.classList.contains("_animation_hover")) {
		$("#btn_chat_icon").classList.remove("_animation_hover");
	}

	$("#btn_chat_icon").classList.add("_animation_hoverout");
});

const btnChat = $("#btn_start_chat");

btnChat.addEventListener("click", () => {
	const socket = io();

	const params = {
		message: $("#message").value,
	};

	socket.on("connect", () => {
		socket.emit("client_first_access", params, (fn, err) => {
			if (err) console.log(err);
			else console.log(fn);
		});
	});
});
