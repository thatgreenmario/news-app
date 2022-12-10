export interface NewsData {
    name: string;
    source: string;
    feed: string;
    topic: string;
    articles : [
        {
            uuid: string;
            source: string;
            url: string;
            title: string;
            description: string;
            content: string;
            published_at: string;
            inserted_at: string;
            age: string;
            sentiment_compound: number;
            sentiment_positive: number;
            sentiment_negative: number;
            sentiment_neutral: number;
            keyword:[];
            comment_url: string;
        }
    ]
  }