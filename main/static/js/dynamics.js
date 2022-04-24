window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);

    setCookie('message0', 'Тук-тук, рад вас видеть!', 30);
    setCookie('message0kind', 'reply', 30);

    for (i = 0; i < 1000; i++) {
        tag1 = 'message' + i;
        tag2 = 'message' + i + 'kind';
        mess = getCookie(tag1);
        kind = getCookie(tag2);
        if (mess != '') {
            messageValue = mess;
            field = document.querySelector('.field');
            message = document.createElement('div');
            messWrap = document.createElement('div');
            messageP = document.createElement('p');
            if (kind == 'send') {
                message.className = 'send message';
            } 
            if (kind == 'reply') {
                message.className = 'reply message';
            };
            messageP.innerHTML = messageValue;
            field.appendChild(message);
            message.appendChild(messWrap);
            messWrap.appendChild(messageP);
        };
    };

}

function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}

function botToggleUp() {
    messages = document.querySelectorAll('.message');
    document.querySelector('.wrapWrapper').classList.add('botActive');
    document.querySelector('.mainButton').classList.add('buttonUp');
    document.querySelector('.mainButton').classList.remove('toucanAnime');
    document.querySelector('.background').classList.add('ing');
    document.querySelector('body').classList.add('noneScroll');
    setTimeout(backUp, 200);
    if (messages.length >= 1){
        setTimeout(deleteUp, 400);
    };
};
function botToggleDown() {
    document.querySelector('.wrapWrapper').classList.remove('botActive');
    document.querySelector('.mainButton').classList.remove('buttonUp');
    document.querySelector('.background').classList.remove('ing');
    document.querySelector('body').classList.remove('noneScroll');
    backDown();
    deleteDown();
};
function buttonClose() {
    document.querySelector('.mainButton').classList.add('buttonClose');
};




function backUp() {
    document.querySelector('.back').classList.add('backActive');
};
function backDown() {
    document.querySelector('.back').classList.remove('backActive');
};
function deleteUp() {
    document.querySelector('.delete').classList.add('backActive');
};
function deleteDown() {
    document.querySelector('.delete').classList.remove('backActive');
};



function key13(event) {
    input = document.querySelector('.botSender');
    button = document.querySelector('.botKey');
    if (input.value != '') {
        if (event.keyCode === 13) {
            event.preventDefault();
            button.click();
        };
    };
};



function deleteAll() {
    messages = document.querySelectorAll('.message');
    messages.forEach(function(item){
        item.parentNode.removeChild(item);
    });
    document.querySelector('.deleteAlert').classList.remove('aAlert');
    deleteCookie();
    setTimeout(deleteDown, 200);
};
function alertDeleteUp() {
    document.querySelector('.deleteAlert').classList.add('aAlert');
};
function alertDeleteDown() {
    document.querySelector('.deleteAlert').classList.remove('aAlert');
};


function sendMessage() {
    input = document.querySelector('.botSender');
    if (input.value != '') {
        messageValue = document.querySelector('.botSender').value;
        field = document.querySelector('.field');
        message = document.createElement('div');
        messWrap = document.createElement('div');
        messageP = document.createElement('p');
        message.className = 'send message';
        messageP.innerHTML = messageValue;
        field.appendChild(message);
        message.appendChild(messWrap);
        messWrap.appendChild(messageP);
        isMessages = document.querySelectorAll('.message');
        messagePosition = isMessages.length - 1;
        cookieName1 = 'message' + messagePosition;
        cookieName2 = 'message' + messagePosition + 'kind';

        setCookie(cookieName1, messageValue, 30);
        setCookie(cookieName2, 'send', 30);

        field.scrollTop = field.scrollHeight;
        document.querySelector('.botSender').value = '';
        document.querySelector('.botSender').focus();
        setTimeout(deleteUp, 200);
        dir1 = ['привет', 'здра', 'здар', 'здор', 'hi', 'hello', 'hallo', 'хай', 'хаи', 'даров'];
        dir2 = ['задниц', 'хрен', 'жоп', 'дау', 'дебил', 'соси', 'ху', 'чле', 'дур'];
        dir3 = ['заказ', 'куп', 'приобре', 'устано', 'работ', 'беспл'];
        dir4 = ['кто ты', 'кто вы', 'ты кто', 'вы кто', 'команд', 'список', 'помо', 'заним', 'что это'];
        dir5 = ['свидан', 'пока', 'до скорого', 'пасиб', 'прощай', 'встреч', 'благодар'];
        dir6 = ['дела', 'жизнь'];
        dir7 = ['связь', 'обратная связь', 'отзыв', 'связаться', 'номер телефона', 'контакты'];
        ifFirstMessage = false;
        for (item of dir1) {
            reply = 'Привет! Чем могу вам помочь?';
            replyMessage(reply);
        };
        for (item of dir2) {
            reply = 'Вы очень некультурный человек! Я не хочу с вами разговаривать! Тук-тук';
            replyMessage(reply);
        };
        for (item of dir3) {
            reply = 'Данная платформа позволяет вам просматривать все самые актуальные новости в сфере экономики, а также покупать и продавать валюту. ';
            replyMessage(reply);
        };
        for (item of dir4) {
            reply = 'Данная платформа позволяет вам просматривать все самые актуальные новости в сфере экономики, а также покупать и продавать валюту.';
            replyMessage(reply);
        };
        for (item of dir5) {
            reply = 'Рад помочь!';
            replyMessage(reply);
        };
        for (item of dir6) {
            reply = 'Отлично, рад, что спросили!';
            replyMessage(reply)
        };
        for (item of dir7) {
            reply = 'Наши контакты доступны возле формы "обратной связи", будем рады вашему отклику.';
            replyMessage(reply);
        };
        sends = document.querySelectorAll('.message');
        lastSend = sends[sends.length - 1];
        lastClass = lastSend.getAttribute('class');
        if (lastClass == 'send message') {
            botMessage = document.createElement('div');
            botMessWrap = document.createElement('div');
            botMessageP = document.createElement('p');
            botMessage.className = 'reply message';
            botMessageP.innerHTML = 'Извините, я вас не понимаю!';
            field.appendChild(botMessage);
            botMessage.appendChild(botMessWrap);
            botMessWrap.appendChild(botMessageP);
            field.scrollTop = field.scrollHeight;

            isMessagess = document.querySelectorAll('.message');
            messagePosition = isMessagess.length - 1;
            cookieName1 = 'message' + messagePosition;
            cookieName2 = 'message' + messagePosition + 'kind';

            setCookie(cookieName1, 'Извините, я вас не понимаю!', 30);
            setCookie(cookieName2, 'reply', 30);
        };
    };
};



// Reply

function replyMessage(direct) {
    if (ifFirstMessage == false) {
        lowerValue = messageValue.toLowerCase();
        if (lowerValue.includes(item)) {    
            botMessage = document.createElement('div');
            botMessWrap = document.createElement('div');
            botMessageP = document.createElement('p');
            botMessage.className = 'reply message';
            botMessageP.innerHTML = direct;
            field.appendChild(botMessage);
            botMessage.appendChild(botMessWrap);
            botMessWrap.appendChild(botMessageP);
            field.scrollTop = field.scrollHeight;

            isMessagess = document.querySelectorAll('.message');
            messagePosition = isMessagess.length - 1;
            cookieName1 = 'message' + messagePosition;
            cookieName2 = 'message' + messagePosition + 'kind';

            setCookie(cookieName1, direct, 30);
            setCookie(cookieName2, 'reply', 30);
        };
    };
    
};        


// Cookie

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/, secure";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function deleteCookie() {
    for (i = 0; i < 1000; i++) {
        tag1 = 'message' + i;
        tag2 = 'message' + i + 'kind';
        mess = setCookie(tag1, '0', -1);
        kind = setCookie(tag2, '0', -1);
    }
}
