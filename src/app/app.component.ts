import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'movie-app-01';

  items = [
    {
      title: 'Dunkirk',
      tags: ['Bitski', 'Multi', 'Sold'],
      url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/434x231/5e96bf1d866ac31a8856ccd1?w=720&q=75'
    },
    {
      title: 'Love & Other Drugs',
      tags: ['$MEME', 'Multi'],
      url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/434x231/603cbf5c866ac31798b3f1ac?w=434&q=75'
    },
    {
      title: 'A Perfect Day',
      tags: ['SuperRare', 'Single', 'Secondary'],
      url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/434x231/6049df69866ac31fcc5d00c1?w=434&q=75'
    },
    {
      title: 'Lady Macbeth',
      tags: ['OpenSea', 'Single', 'Sold', 'Bespoke'],
      url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/434x231/619247b1866ac31084da57c2?w=434&q=75'
    }
  ]
}
