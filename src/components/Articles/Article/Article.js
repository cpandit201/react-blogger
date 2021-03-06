import React, { Component } from 'react'

import Octicon, { Thumbsup } from '@primer/octicons-react';
export default class Article extends Component {
    render() {

        let tags = this.props.tags;
        let tagBody = tags.map((currentTag) => {
            return( <span>
                        <span class="badge badge-secondary">{currentTag}</span><span> </span>
                    </span>)
        });
        
        let profilePictureImgTag = 
            <a href="https://google.com">
                <img class="avatar imgBorders mr-2 rounded" 
                    alt="" 
                    width="20" 
                    height="20" 
                    src={this.props.profileImgSource}/>
            </a>
        return (
                    <div class="media text-muted pt-3"> 
                        {profilePictureImgTag}
                        <br />

                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <h3><a class="text-muted title" href="https://google.com">{this.props.title}</a></h3>
                            <span>{this.props.articlePostedOnDate} <br /> 
                            <strong class="title">
                                <a class="text-muted title" href="https://google.com">@{this.props.userName}</a>
                            </strong> 
                                
                            </span>

                            <br /><br />
                            <p>
                              {this.props.body}
                              <a href="https://here.com/">[Read More]</a>
                            </p>
                            
                            <h5>
                               {tagBody}
                            </h5>
                            
                            {this.props.likes > 0 ? <a href="https://here.com">{this.props.likes}</a>  : "" }
                            &nbsp;<a href="https://google.com"><Octicon icon={Thumbsup} /> Like</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {/* <a href="https://here.com">60 <Octicon icon={Comment} /></a> <a href="https://google.com">Comment</a> */}
                        </p>
                    </div>
        );
    }
}
