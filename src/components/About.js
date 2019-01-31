import React from 'react'
import stellaAndI from '../img/stella.jpg'


export default () => (
    <section className="section has-background-grey-lighter has-text-centered">
        <div className="container">
            <div style={{position: 'relative', zIndex: 2, margin: '0 auto -96px', width: '192px', height: '192px', backgroundImage: `url(${stellaAndI})`, backgroundSize: 'cover', border: '3px white solid', borderRadius: '100%'}}></div>
            <div className="card has-background-white-ter" style={{paddingTop: 'calc(96px + 3rem)'}}>
                <div className="card-content has-text-centered">
                    <h1 className="title">Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla turpis mi, sed maximus magna congue nec. Sed at fringilla ligula. Maecenas consectetur, dolor non tincidunt consequat, arcu elit varius dui, non pharetra neque libero non libero. Donec in varius turpis, sit amet auctor elit. Quisque a malesuada ex. Curabitur consectetur porta faucibus. Fusce quis ligula nulla. Vestibulum non pharetra sem. Mauris eleifend arcu in nisi egestas vestibulum. Duis tellus nibh, posuere id malesuada et, consequat sed velit. Aenean lacus arcu, pretium ac nibh nec, auctor iaculis turpis. Vivamus auctor sapien ac justo rutrum, eu euismod nunc venenatis. Morbi tempor tempus metus. Ut malesuada sit amet felis sit amet aliquet. In consequat scelerisque elit. Cras sagittis, velit tempor gravida bibendum, magna ipsum tempor eros, sed bibendum purus dui sed mi.</p>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla turpis mi, sed maximus magna congue nec. Sed at fringilla ligula. Maecenas consectetur, dolor non tincidunt consequat, arcu elit varius dui, non pharetra neque libero non libero. Donec in varius turpis, sit amet auctor elit. Quisque a malesuada ex. Curabitur consectetur porta faucibus. Fusce quis ligula nulla. Vestibulum non pharetra sem. Mauris eleifend arcu in nisi egestas vestibulum. Duis tellus nibh, posuere id malesuada et, consequat sed velit. Aenean lacus arcu, pretium ac nibh nec, auctor iaculis turpis. Vivamus auctor sapien ac justo rutrum, eu euismod nunc venenatis. Morbi tempor tempus metus. Ut malesuada sit amet felis sit amet aliquet. In consequat scelerisque elit. Cras sagittis, velit tempor gravida bibendum, magna ipsum tempor eros, sed bibendum purus dui sed mi.</p>
                </div>
            </div>
        </div>
    </section>
)