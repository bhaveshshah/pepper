var data = {
    "tab1": {
        "head": "What is Lorem Ipsum?",
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic\n typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\n sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus\n PageMaker including versions of Lorem Ipsum."
    },
    "tab2": {
        "head": "Why do we use it?",
        "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking\n at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n as opposed to using 'Content here, content here', making it look like readable English. Many desktop\n publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search\n for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over\n the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    "tab3": {
        "head": "Where does it come from?",
        "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin\n literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney\n College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,\n and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem\n Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good\n and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular\n during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line\n in section 1.10.32."
    },
    "tab4": {
        "head": "Where can I get some?",
        "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration\n in some form, by injected humour, or randomised words which don't look even slightly believable. If you\n are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden\n in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks\n as necessary, making this the first true generator on the Internet."
    }
}

$(document).ready(function () {
    $(".tab-body").hide();
    $(".tab-body:first").show();
})


// used JS for the click events not for converting the Accordian to tabs
$("ul").on('click', function (event) {
    $(".tab-body").hide();
    $("ul.tabs li").removeClass("active");
    $(event.target).addClass('active')

    $(".tab-heading").removeClass("tab-active");
    $(".tab-heading[rel^='" + event.target + "']").addClass("tab-active");

    var tabDiv = $('#' + event.target.getAttribute('rel'));
    tabDiv.fadeIn();
    if (tabDiv.children().length === 0) {
        // Created using Javascript can even be created using jQuery.
        var h2 = document.createElement('h2');
        var para = document.createElement('p');
        // assuming we already got the data by calling a restapi.
        h2.innerHTML = data[event.target.getAttribute('rel')].head;
        para.innerHTML = data[event.target.getAttribute('rel')].content;
        // we can use appendChildren() as I already have tabDiv I used that.
        $(tabDiv).append(h2);
        $(tabDiv).append(para);
    }
});


$(".tab-heading").on('click', function () {
    $(".tab-body").hide();
    var activeTab = $(this).attr("rel");
    $(".tab-heading").removeClass("tab-active");
    $(this).addClass("tab-active");
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + activeTab + "']").addClass("active");
    var tabDiv = $("#" + activeTab);
    tabDiv.fadeIn();
    if (tabDiv.children().length === 0) {
        // Created using Javascript can even be created using jQuery.
        var h2 = document.createElement('h2');
        var para = document.createElement('p');
        h2.innerHTML = data[event.target.getAttribute('rel')].head;
        para.innerHTML = data[event.target.getAttribute('rel')].content;
        $(tabDiv).append(h2);
        $(tabDiv).append(para);
    }
});