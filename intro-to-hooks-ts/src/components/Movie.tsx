import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

interface Props {
    title: string;
    director: string;
    description: string;
    score: string;
}

function Movie(props: Props) {

    return(
        <Card>
            <Image src="https://images.prismic.io/yumetwins/6ab1f919524481da3435a5ee3b1313fac2898c70_sgcollage.png?auto=compress,format" wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Meta>
                    {props.director}
                </Card.Meta>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='star outline' />
                {props.score}% Rotten Tomatoes Score
            </Card.Content>
        </Card>
    )

}

export default Movie;