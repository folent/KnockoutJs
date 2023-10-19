ko.applyBindings({
    categories: ko.observableArray([
        {
            name: "Обязательные для всех",
            items: ko.observableArray([
                { name: "Паспорт" },
                { name: "ИНН" }
            ]),
        },
        {
            name: "Обязательные для трудоустройства",
            items: ko.observableArray([
                { name: "Тест 1" },
                { name: "Тест 2" }
            ]),
        },
        {
            name: "Специальные",
            items: ko.observableArray([
                { name: "Тест 3" },
                { name: "Тест 4" }
            ])
        }
    ]),
    toggleDropDown: function (data, event) {
        const dropdown = event.target.closest('.dropdown')
        if (dropdown) {
            dropdown.classList.toggle('open')
        }
    },
    onDrag: function (data, event) {
        if (!event.target.closest('.drag-button')) {
            event.stopImmediatePropagation()
        }
    }
});
