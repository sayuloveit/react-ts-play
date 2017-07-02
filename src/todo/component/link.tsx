import * as React from 'react';

export interface ILinkProps {
    active: boolean;
    children: React.ComponentClass;
    onClick: any;
}

export const Link: React.StatelessComponent<ILinkProps> = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a 
            href="#" 
            onClick={ e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};