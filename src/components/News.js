import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
{
"source": {
"id": "the-verge",
"name": "The Verge"
},
"author": "Richard Lawler",
"title": "Former Uber security chief found guilty of covering up massive 2016 data breach",
"description": "Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.",
"url": "https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment",
"urlToImage": "https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg",
"publishedAt": "2022-10-06T00:25:32Z",
"content": "Former Uber security chief found guilty of covering up massive 2016 data breach\r\nFormer Uber security chief found guilty of covering up massive 2016 data breach\r\n / Prosecutors claimed Joe Sullivan h… [+4358 chars]"
},
{
"source": {
"id": "the-verge",
"name": "The Verge"
},
"author": "Emma Roth",
"title": "Google’s partnering with Coinbase to let cloud customers pay in crypto next year",
"description": "Starting in 2023, Google will partner with Coinbase to power crypto-based transactions for “select” customers in the Web3 space.",
"url": "https://www.theverge.com/2022/10/11/23398306/google-coinbase-partnership-crypto-2023-cloud",
"urlToImage": "https://cdn.vox-cdn.com/thumbor/a1UuqmTXeWu_sDyVAVipeGpIQ0s=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
"publishedAt": "2022-10-11T14:29:54Z",
"content": "Googles partnering with Coinbase to let cloud customers pay in crypto next year\r\nGoogles partnering with Coinbase to let cloud customers pay in crypto next year\r\n / The search giant will use Coinbase… [+1913 chars]"
},
{
"source": {
"id": "reuters",
"name": "Reuters"
},
"author": null,
"title": "Crypto firm 21Shares lists bitcoin ETP on Nasdaq Dubai - Reuters.com",
"description": "Crypto investment products firm 21.co said on Wednesday its subsidiary 21Shares AG has listed a bitcoin exchange-traded product on Nasdaq Dubai, making it the Middle East's first physically-backed bitcoin ETP.",
"url": "https://www.reuters.com/technology/crypto-firm-21shares-lists-bitcoin-etp-nasdaq-dubai-2022-10-12/",
"urlToImage": "https://www.reuters.com/resizer/e-rtKXHJBMDr3n3yPuzMmaBrXaE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/62VXJFTHEZNRZM4CO6PTL5CS3A.jpg",
"publishedAt": "2022-10-12T06:05:00Z",
"content": "DUBAI, Oct 12 (Reuters) - Crypto investment products firm 21.co said on Wednesday its subsidiary 21Shares AG has listed a bitcoin exchange-traded product on Nasdaq Dubai, making it the Middle East's … [+1642 chars]"
}
]
    constructor(){
    super();
    this.state={
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>News- top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="my des" imageUrl="https://www.reuters.com/resizer/e-rtKXHJBMDr3n3yPuzMmaBrXaE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/62VXJFTHEZNRZM4CO6PTL5CS3A.jpg" news=""/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="my des"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="my des"/>
          </div>
          </div>
      
      </div>
      
    )
  } 
}

export default News