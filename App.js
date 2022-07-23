const selector = document.querySelector('.select-lang');

selector.addEventListener('change', e => {
    console.log('changed', e.target.value);
})
console.log('hi');

selector.addEventListener('mousedown', e => {
    e.preventDefault();

    const select = selector.children[0];
    const dropDown = document.createElement('ul');
    dropDown.className = "selector-option";

    [...select.children].forEach(option => {
        const dropDownOPtion = document.createElement('li');
        dropDownOPtion.textContent = option.textContent;

        dropDownOPtion.addEventListener('mousedown', e => {
            e.stopPropagation();
            select.value = option.value;
            selector.value = option.value;
            selector.dispatchEvent(new Event('change'));
            dropDown.dispatchEvent(new Event('change'));
            dropDown.remove();
        })

        dropDown.appendChild(dropDownOPtion);
    });

    selector.appendChild(dropDown);
    document.addEventListener('click', e => {
        if (!selector.contains(e.target)) {
            dropDown.remove();
        }
    })

})

function shiftlabel() {
    const label = document.getElementById('input-label');
    label.style.position = 'relative';
    label.style.top = '-17px';
    label.style.fontSize = '12px';
}
function resetInput() {
    if (document.getElementById('email').value == "") {
        const labelfix = document.getElementById('input-label');
        labelfix.style.position = 'relative';
        labelfix.style.top = '-2px';
        labelfix.style.fontSize = '15px';
        labelfix.style.left = '-38px';
    }

    else {
        document.getElementById('email').value = "";
        const labelfix = document.getElementById('input-label');
        labelfix.style.position = 'relative';
        labelfix.style.top = '-2px';
        labelfix.style.fontSize = '15px';
        labelfix.style.left = '-38px';
    }

}

function freeinput() {
    const label = document.getElementById('input-label');
    label.style.position = 'relative';
    label.style.top = '-17px';
    label.style.fontSize = '12px';
}

function toggle() {
    let para = document.getElementById("para1");
    if (para.style.display == "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}
function toggle1() {
    let para = document.getElementById("para2");
    if (para.style.display == "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}
function toggle2() {
    let para = document.getElementById("para3");
    if (para.style.display == "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}
function toggle3() {
    let para = document.getElementById("para4");
    if (para.style.display == "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}
function toggle4() {
    let para = document.getElementById("para5");
    if (para.style.display == "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}
function toggle5() {
    let para = document.getElementById("para6");
    if (para.style.display == "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}