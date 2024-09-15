import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    const target = document.querySelector('.animated');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.startCounting(entry.target as HTMLElement);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);

    if (target != null)
      observer.observe(target);

    // this.counterElements.toArray().forEach((element: any) => {
    //   observer.observe(element);
    // });
  }

  startCounting(element: HTMLElement) {
    const start = parseInt(element.getAttribute('data-start')!, 10);
    const end = parseInt(element.getAttribute('data-end')!, 10);
    let count = start;
    const interval = setInterval(() => {
      if (count <= end) {
        element.innerHTML = count.toString();
        count++;
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust speed as needed
  }
}
