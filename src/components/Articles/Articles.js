import React, { Component } from 'react'
import Article from './Article/Article.js'
import './Articles.css'
import Octicon, { Thumbsup } from '@primer/octicons-react';

export default class Articles extends Component {
    render() {
        return (
            <div class="container">
                <div class="my-3 p-3 bg-white rounded box-shadow">
                    <h3
                        class="border-bottom border-gray pb-2 mb-0">All articles</h3>

                    <Article 
                        id="1234"
                        title="Created this new article with title of this"
                        userName = "deadnight10"
                        tags={['So','Dragons','Test123']}
                        likes="23"
                        isLikedByUser={true}
                        comments="56"
                        body="Hello World..."
                        profileImgSource="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170aeee65cf%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170aeee65cf%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.2890625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" 
                        articlePostedOnDate = "7th Feb 2020"
                    />

                    <div class="media text-muted pt-3">

                        <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1"
                            alt="32x32"
                            class="imgBorders mr-2 rounded"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170aeee65cf%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170aeee65cf%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.2890625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />

                        <br />

                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <h3> Did you train your dragon 222?</h3>
                            <span>4th Feb 2020 <br /> <strong class="">@deadnight7</strong> </span>

                            <br /><br />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, risus
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit risus.... <a href="https://here.com/">[Read More]</a>
                            </p>
                            
                            <h5>
                                <span class="badge  badge-secondary">React</span>&nbsp;
                                <span class="badge  badge-secondary">Angular</span>&nbsp;
                                <span class="badge  badge-secondary">NodeJS</span>&nbsp;
                            </h5>
                            <a href="https://here.com">53 <Octicon icon={Thumbsup} /></a> <a href="https://google.com">Like</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://here.com">90 </a> <a href="https://google.com">Comments</a>
                            
                        </p>

                    </div>

                    <div class="media text-muted pt-3">
                        <img data-src="holder.js/32x32?theme=thumb&amp;bg=6f42c1&amp;fg=6f42c1&amp;size=1"
                            alt="32x32"
                            class="mr-2 rounded imgBorders" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170aeee65d1%20text%20%7B%20fill%3A%236f42c1%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170aeee65d1%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%236f42c1%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.2890625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />

                        <br />

                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <h3> You have to believe last mile delivery</h3>
                            <span>4th Feb 2020 <br /> <strong class="">@deadnight7</strong> </span>

                            <br /><br />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, risus
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit risus.... <a href="https://here.com/">[Read More]</a>
                            </p>
                            <a href="https://here.com">53 <Octicon icon={Thumbsup} /></a> <a href="https://google.com">Like</a>
                        </p>

                    </div>

                    <div class="media text-muted pt-3">

                        <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1"
                            alt="32x32"
                            class="imgBorders mr-2 rounded"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170aeee65cf%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170aeee65cf%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.2890625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />

                        <br />

                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <h3> 测试标题</h3>
                            <span>4th Feb 2020 <br /> <strong class="">@deadnight7</strong> </span>

                            <br /><br />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, risus
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit risus.... <a href="https://here.com/">[Read More]</a>
                            </p>
                            <a href="https://here.com">53 <Octicon icon={Thumbsup} /></a> <a href="https://google.com">Like</a>
                        </p>

                    </div>

                    
                    <div class="media text-muted pt-3">
                        <img
                            data-src="holder.js/32x32?theme=thumb&amp;bg=e83e8c&amp;fg=e83e8c&amp;size=1"
                            alt="32x32"
                            class="mr-2 rounded imgBorders" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170aeee65d1%20text%20%7B%20fill%3A%23e83e8c%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170aeee65d1%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23e83e8c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.2890625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />

                        <br />

                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <h3> 的 格式，你能解析的了吗？</h3>
                            <span>4th Feb 2020 <br /> <strong class="">@deadnight7</strong> </span>

                            <br /><br />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, risus
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit risus.... <a href="https://here.com/">[Read More]</a>
                            </p>
                            <a href="https://here.com">53 <Octicon icon={Thumbsup} /></a> <a href="https://google.com">Like</a>
                        </p>

                    </div>

                    <div class="media text-muted pt-3">
                        <img
                            data-src="holder.js/32x32?theme=thumb&amp;bg=e83e8c&amp;fg=e83e8c&amp;size=1"
                            alt="32x32"
                            class="mr-2 rounded imgBorders" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170aeee65d1%20text%20%7B%20fill%3A%23e83e8c%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170aeee65d1%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23e83e8c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.2890625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />

                        <br />

                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <h3> Is Brazil is saved from Corona?</h3>
                            <span>4th Feb 2020 <br /> <strong class="">@deadnight7</strong> </span>

                            <br /><br />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, risus
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit risus.... <a href="https://here.com/">[Read More]</a>
                            </p>
                            <a href="https://here.com">53 <Octicon icon={Thumbsup} /></a> <a href="https://google.com">Like</a>
                        </p>

                    </div>




                    <small class="d-block text-right mt-3">
                        <a href="https://here.com">All updates</a>
                    </small>
                </div>
            </div>
        );
    }
}
