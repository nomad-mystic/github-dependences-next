import React, { PropsWithChildren } from 'react';

const Card = (props: PropsWithChildren): React.JSX.Element => {
    return (
        <section className="card">
            { props.children }
        </section>
    );
};

export default Card;
