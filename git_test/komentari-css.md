# GRID SYSTEM

## veoma vazno podesavanje!!!

<!-- PRIMER 1. -->

- width: 90vw;
- margin: 0 auto;
- max-width: 1170px;
- display: grid;
- grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
- grid-column-gap: 1.5rem;
- grid-row-gap: 2rem;

<!-- primer 2 -->

## situacija sa 3 columne(3 div) inline

- grid-template-columns: auto 1fr auto;
- grid-column-gap: 1.5rem;

## POSITION

- da bi nesto mogli biti position absolute, parent mora da bude position: relative

## hover + event css only solution

<!-- primer -->

- .img:hover .bag-item {
- transform: translateX(-101%)
  }

## overflow

- overflow: scroll;

## width

<!-- windth 30% of screen but no less than 400px -->

- width:30vw
- min-width: 400px
