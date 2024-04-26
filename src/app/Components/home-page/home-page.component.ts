import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '1.7s ease-in',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),

    trigger('slideInAnimation', [
      state(
        'in',
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '1s ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class HomePageComponent implements OnInit {
  animateScroll: boolean = false;
  animateCards: boolean = false;

  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.observeCards();
    this.observeThirdSection();
  }

  observeCards() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateCards = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const cards = this.elementRef.nativeElement.querySelectorAll('.card');
    cards.forEach((card: Element) => {
      observer.observe(card);
    });
  }

  observeThirdSection() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, //
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateScroll = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const thirdSection =
      this.elementRef.nativeElement.querySelector('.third-section');
    observer.observe(thirdSection);
  }
}
