import React from 'react'
import { css } from '@emotion/core'

import stellaAndI from '../img/stella.jpg'

export default () => (
    <section className="section has-background-grey-lighter has-text-centered">
        <div className="container">
            <div css={css`
                    position: relative;
                    z-index: 2;
                    margin: 0 auto -96px;
                    width: 192px;
                    height: 192px;
                    background-image: url(${stellaAndI});
                    background-size: cover;
                    border: 3px white solid;
                    border-radius: 100%;
                `}></div>
            <div className="card has-background-white-ter" css={css`
                padding-top: calc(96px + 3rem);
            `}>
                <div className="card-content has-text-centered">
                    <h1 className="title">Hello World</h1>
                    <p>First and foremost, I love to learn.</p>
                    <p>There was once a point in my life where the mastery of programming was my primary goal. Now that I'm a little older, I realize that is the wrong way of looking at things. When you're pursuing knowledge, a tenet of programming, there is no mastery, no final level. We often want to view the pursuit as if we were climbing a mountain, except there is no pinnacle. All we have is an endless series of trails and plateaus -- we're all a bit like Sisyphus in that regard.</p>
                    <p>In reality, this is a good thing. I believe that we can find joy in the constant improvment we make to ourselves. Every time we reach that plateau, we take stock of our accomplishments and strive on towards the next goal. Every time we take pride in pushing ourself just a little further than we thought possible. Sitting at the top would make us boring, and we would lose that creative spark that drives us programmers to learn.</p>
                    <p>This blog is the product of me wanting to push myself not only mentally, but physically as well. I hope you'll stick with me as I prepare for my very firs Spartan Race.</p>
                </div>
            </div>
        </div>
    </section>
)