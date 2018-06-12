// @flow
import * as React from 'react'
import styled from 'styled-components'

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

const HorizontalScrollerStyles = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.8rem;
  width: 100%;
  padding: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const HorizontalScrollBarContainer = styled.div`
  position: relative;
`

const ChevronStyles = styled.button`
  position: absolute;
  background: #fff;
  cursor: pointer;
  margin: 0;
  padding: 0;
  height: 48px;
  width: 48px;
  border: none;
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
  & svg {
    height: 36px;
    width: 36px;
  }
  top: 35%;
  ${props => (props.right ? 'right: 0;' : '')};
`

class CardHorizontalScroller extends React.Component<
  {
    children: any
  },
  {
    canScrollLeft: boolean,
    canScrollRight: boolean
  }
> {
  node: HTMLDivElement
  state = {
    canScrollLeft: false,
    canScrollRight: true
  }
  handleScroll(direction: number) {
    const delta = direction * this.node.clientWidth
    const futureScrollLeft = this.node.scrollLeft + delta
    // Update in which direction the user could scroll
    const canScrollLeft = futureScrollLeft > 0
    const canScrollRight =
      futureScrollLeft <
      this.node.scrollWidth - this.node.clientWidth
    this.setState({
      canScrollLeft,
      canScrollRight
    })
    // $FlowFixMe
    this.node.scrollBy({
      left: delta,
      behavior: 'smooth'
    })
  }
  render() {
    const { children } = this.props
    return (
      <HorizontalScrollBarContainer>
        {this.state.canScrollLeft && (
          <ChevronStyles
            left
            onClick={() => this.handleScroll(-1)}
          >
            <ChevronLeft />
          </ChevronStyles>
        )}
        <HorizontalScrollerStyles
          innerRef={ref => (this.node = ref)}
        >
          {children}
        </HorizontalScrollerStyles>
        {this.state.canScrollRight && (
          <ChevronStyles
            right
            onClick={() => this.handleScroll(1)}
          >
            <ChevronRight />
          </ChevronStyles>
        )}
      </HorizontalScrollBarContainer>
    )
  }
}

export { CardHorizontalScroller }
