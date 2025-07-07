var tabButtons = document.querySelectorAll('.tab-btn');
var tabContents = document.querySelectorAll('.tab-content');
tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var tabId = button.dataset.tab;
        tabButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        tabContents.forEach(function (content) {
            content.classList.remove('active');
        });
        button.classList.add('active');
        var targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
