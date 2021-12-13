const btnChat = $("#chat_button");

btnChat.addEventListener("mouseover", () => {
	if (btnChat.classList.contains("_animation_hoverout")) {
		$("#chat_button").classList.remove("_animation_hoverout");
  }
  
	$("#chat_button").classList.add("_animation_hover");
});

btnChat.addEventListener("mouseleave", () => {
	if (btnChat.classList.contains("_animation_hover")) {
	  $("#chat_button").classList.remove("_animation_hover");
	}

	$("#chat_button").classList.add("_animation_hoverout");
});
