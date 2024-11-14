import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PollList from './PollList';
import { act } from 'react';

describe('PollList', () => {
  it('renders polls and handles click events', () => {
    const mockPolls = [
      { id: 1, question: 'Poll 1' },
      { id: 2, question: 'Poll 2' },
    ];

    render(<PollList polls={mockPolls} />);

    const pollLinks = screen.getAllByRole('button');
    expect(pollLinks.length).toBe(2);
    expect(pollLinks[0]).toHaveTextContent('Poll 1');
    expect(pollLinks[1]).toHaveTextContent('Poll 2');

    act(() => {
      userEvent.click(pollLinks[0]);
    });
  });
});