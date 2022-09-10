const template = document.createElement('template');

template.innerHTML = `
    <style>
        .card {
            border-radius: 0.25rem;
            box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 25%), 0 0 0 1px rgb(10 10 10 / 2%);
            width: fit-content;
            padding: 20px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
        }
        
        .card-top {
            display: flex;
        }
        
        .description {
            margin-top: 20px;
            display: flex;
            text-align: start;
        }
        
        .img {
        border-radius: 5px;
        }
        
        .title {
            font-weight: bold;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .img {
            min-width: 50px;
            min-height: 50px;
            background-color: gray;
            margin-right: 20px;
        }
    </style>
    
    <div class="card">
        <div class="card-top">
            <img src="" alt="" class="img">
            <p class="title"></p>
        </div>
        <div class="description">
        </div>
        <!-- Any extra stuff goes into this slot -->
        <slot name="add-on"></slot>
    </div>  
`;


class MediaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');
    const description = this.getAttribute('desc');

    this.shadowRoot.querySelector('.title').innerHTML = title;
    this.shadowRoot.querySelector('.img').attributes.src.value = image;
    this.shadowRoot.querySelector('.description').innerHTML = description;
  }
}

window.customElements.define('media-card', MediaCard);