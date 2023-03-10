import './searchDr.scss';
import '../SearchList/SearchList';

class SearchDr extends HTMLElement {
  constructor() {
    super();
    this.data = [
      'Albania',
      'Bahamas',
      'Armenia',
      'Belarus',
      'Cambodia',
      'Colombia',
      'Czech Republic',
      'Estonia',
      'France',
      'Georgia',
      'Germany',
    ];
  }

  onSearch = (evt) => {
    const value = evt.target.value.trim().toLowerCase();
    const filteredData = this.data.filter((item) => item.toLowerCase(value).includes(value));
    const listContainer = this.querySelector('.list-container');
    listContainer.innerHTML = `
         <it-search-list list='${JSON.stringify(filteredData)}'></it-search-list>`;
  };

  disconnectedCallback() {
    this.removeEventListener('input', this.onSearch);
  }

  connectedCallback() {
    this.render();
    this.addEventListener('input', this.onSearch);
  }

  render() {
    this.innerHTML = `
      <div class="container">
         <form class="w-100 me-3 position-relative role="search">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
            <div class="list-container">
               <it-search-list list='${JSON.stringify(this.data)}'></it-search-list>
            </div>
         </form>
      </div>
      `;
  }
}

customElements.define('it-search-dr', SearchDr);
