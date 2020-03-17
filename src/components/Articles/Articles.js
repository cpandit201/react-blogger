import React, { Component } from 'react'
import Article from './Article/Article.js'
import './Articles.css'
import axios from 'axios'

class Articles extends Component {
    state = {
        isLoaded : false,
        result: ""
    }

    async componentDidMount () {
        //Make a call to GET - https://conduit.productionready.io/api/articles -- {{APIURL}}/articles - headers - Content-Type:application/json - X-Requested-With:XMLHttpRequest - retrieve the result - and parse it in articles array   
        let articles = await axios.get('https://conduit.productionready.io/api/articles');
        await console.log('ComponenDidMount');    
        await console.log(articles)

        let articlesData = await articles.data.articles;
        
         let result = await articlesData.map( article => {
                return (
                    <Article 
                        key={article.slug}
                        title={article.title}
                        userName = {article.author.username}
                        tags={article.tagList}
                        likes={article.favoritesCount}
                        isLikedByUser={article.favorited}
                        body={article.body}
                        profileImgSource={article.author.image} 
                        articlePostedOnDate = "7th Feb 2020"
                    />
                )
        });

        this.setState({result})
    }

    render () {
        return (
            <div class="container">
                <div class="my-3 p-3 bg-white rounded box-shadow">
                    <h3 class="border-bottom border-gray pb-2 mb-0">All articles</h3>
                    {
                        this.state.result
                    }
                
                    <small class="d-block text-right mt-3">
                        <a href="https://here.com">All updates</a>
                    </small>
                </div>
            </div>
        );
    }
}

export default Articles;