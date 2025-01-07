import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App', () => {
    it('should render a header and content', () => {
        render(<App/>);

        // header has the search box
        expect(screen.getByRole('searchbox')).toBeInTheDocument();

        // content has the number of articles
        expect(screen.getByText('Recent articles (13)')).toBeInTheDocument();
        // each article has a 'Read more' button
        expect(screen.getAllByRole('button', {name: 'Read more'})).toHaveLength(13);
    })
});