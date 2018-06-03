(function() {

  function testHoldsArticlesList() {

    var data = {
                "response":
                {
                  "status":"ok",
                  "userTier":"developer",
                  "total":119782,
                  "startIndex":1,
                  "pageSize":10,
                  "currentPage":1,
                  "pages":11979,
                  "orderBy":"newest",
                    "results":
                      [{ "id":"uk-news/2018/jun/01/rmt-union-head-calls-for-transport-secretary-to-resign-over-rail-chaos",
                          "type":"article",
                          "sectionId":"uk-news",
                          "sectionName":"UK news",
                          "webPublicationDate":"2018-06-01T17:14:22Z",
                          "webTitle":"Northern axes trains as RMT calls for transport secretary to resign",
                          "webUrl":"https://www.theguardian.com/uk-news/2018/jun/01/rmt-union-head-calls-for-transport-secretary-to-resign-over-rail-chaos","apiUrl":"https://content.guardianapis.com/uk-news/2018/jun/01/rmt-union-head-calls-for-transport-secretary-to-resign-over-rail-chaos",
                          "isHosted":false,
                          "pillarId":"pillar/news",
                          "pillarName":"News",
                          "fields": {
                            "thumbnail": "https://media.guim.co.uk/transport_secretary.jpg"
                            }
                          },
                        {"id":"uk-news/2018/jun/01/john-kinsella-gangland-murder-inquiry-makes-third-arrest",
                        "type":"article",
                        "sectionId":"uk-news",
                        "sectionName":"UK news",
                        "webPublicationDate":"2018-06-01T16:14:05Z",
                        "webTitle":"Man charged over John Kinsella gangland murder in Merseyside",
                        "webUrl":"https://www.theguardian.com/uk-news/2018/jun/01/john-kinsella-gangland-murder-inquiry-makes-third-arrest",
                        "apiUrl":"https://content.guardianapis.com/uk-news/2018/jun/01/john-kinsella-gangland-murder-inquiry-makes-third-arrest",
                        "isHosted":false,
                        "pillarId":"pillar/news",
                        "pillarName":"News",
                        "fields": {
                          "thumbnail": "https://media.guim.co.uk/john_kinsella.jpg"
                        }}
                      ]}}

    var articlesList = new ArticlesList();
    articlesList.addArticles(data);
    assert.isTrue(articlesList.list.length === 2, 'testHoldsArticlesList');
  }

  testHoldsArticlesList()
})(this)
