import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  tooltip: {} = { 
    placement: "top", 
    autoplacement: true, 
    hideDelay: 1000,
    hideDelayTouchScreen:1000,
  display:true,
  displayTouchscreen:true,
  zIndex:10,
  animationDuration:500,
  trigger: "hover",        
  offset:10,
  maxWidth:"220px",
  animation:"upwards",
  pointerEvents:"auto",
  shadow:true,
  noArrow:false,
  tooltipClass:"bg-info fontSize"
};
  constructor() {}
  showTooltip() {
    return this.tooltip;
  }
}
