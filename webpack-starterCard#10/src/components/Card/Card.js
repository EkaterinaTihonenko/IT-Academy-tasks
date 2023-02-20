import './card.scss';

class Card extends HTMLElement {
  //Обьявляем класс Card, наследуемся от базового верхнего html компонента
  //disconnectedCallback() метод удаления будет вызван когда компоненту сделаем display none или удалим из дерева
  disconnectedCallback() {
    //console.log('Удалён!');
    //удаляемся от события(как только компонент удаляется, вместе с ним удаляется и обработчик событий)
    this.removeEventListener('click', this.onRemove);
  }
  //Делегирование-когда вешаем обработчик события полностью на компонент и по захвату смотрим достижение цели, если достижение цели соответствует селектору, тогда говорим сделать какие то действия
  //если метод преднозначен для обработки события то начинается с "on"
  onRemove = (evt) => {
    console.log(evt.currentTarget); //это this(на кого повесили событие => "card")
    console.log(evt.target); // конечная цель где произошел клик => "card__button"
    //ищем ближайшего предка где обработать
    if (evt.target.closest('.card__button')) {
      //стандартный html метод который удаляет(удаляем this => "Card" при помощи стрелочной функции)
      this.remove();
    }
  };

  //connectedCallback() методом обратного вызова, запускается тогда как только браузер зарегестрирует его внутри себя
  connectedCallback() {
    //в созданный элемент передаем разметку
    this.render();
    //подписались на событие
    this.addEventListener('click', this.onRemove);
  }

  //метод для отображения
  render() {
    this.innerHTML = `
            <div class="card">
                 <header class="card__header">
                    <h1>${this.getAttribute('header-content')}</h1>
                 </header>
                 <div class="card__body">
                    <p>${this.getAttribute('body-content')}</p>
                 </div>
                 <button class="card__button">Click</button>
            </div>
       `;
  }
}
//для формирования в дереве нового элемента используем свойство customElements.define(префикс, класс)
customElements.define('it-card', Card);
