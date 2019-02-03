import React from 'react'
import { css } from '@emotion/core'

export default () => (
    <footer className="footer" css={css`
            background-image: linear-gradient(to bottom, #dbdbdb, #d1d1d1, #c8c8c8, #bebebe, #b5b5b5);
        `}>
        <div className="content has-text-centered">
            <p>Created in Gatsby</p>
        </div>
    </footer>
)