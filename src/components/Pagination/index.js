import React, { Component } from 'react'
import PropTypes from 'prop-types'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

class Pagination extends Component {
  constructor (props) {
    super(props)
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0

    this.pageNeighbours = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit)

    this.state = {
      currentPage: 1,
      showingData: 1,
      showingTo: 1
    }
  }

  componentDidMount () {
    const { startPage, pageLimit } = this.props
    this.setState({
      currentPage: startPage,
      showingData: (startPage * pageLimit) - (pageLimit - 1),
      showingTo: (startPage * pageLimit) <= this.totalRecords ? startPage * pageLimit : this.totalRecords
    })
  }

  gotoPage = (page) => {
    const { onPageChanged = (f) => f } = this.props

    const currentPage = Math.max(0, Math.min(page, this.totalPages))

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    }

    this.setState({
      currentPage,
      showingData: currentPage * this.pageLimit
    }, () => onPageChanged(paginationData))
  };

  handleClick = (page, evt) => {
    evt.preventDefault()
    this.gotoPage(page)
  };

  handleMoveLeft = (evt) => {
    const { currentPage } = this.state
    evt.preventDefault()
    this.gotoPage(currentPage - this.pageNeighbours * 2 - 1)
  };

  handleMoveRight = (evt) => {
    const { currentPage } = this.state
    evt.preventDefault()
    this.gotoPage(currentPage + this.pageNeighbours * 2 + 1)
  };

  fetchPageNumbers = () => {
    const { totalPages } = this
    const { currentPage } = this.state
    const { pageNeighbours } = this

    const totalNumbers = this.pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      let pages = []

      const leftBound = currentPage - pageNeighbours
      const rightBound = currentPage + pageNeighbours
      const beforeLastPage = totalPages - 1

      const startPage = leftBound > 2 ? leftBound : 2
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage

      pages = range(startPage, endPage)

      const pagesCount = pages.length
      const singleSpillOffset = totalNumbers - pagesCount - 1

      const leftSpill = startPage > 2
      const rightSpill = endPage < beforeLastPage

      const leftSpillPage = LEFT_PAGE
      const rightSpillPage = RIGHT_PAGE

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1)
        pages = [leftSpillPage, ...extraPages, ...pages]
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset)
        pages = [...pages, ...extraPages, rightSpillPage]
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage]
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  };

  render () {
    if (!this.totalRecords) return null

    if (this.totalPages === 1) return null

    const { currentPage, showingData, showingTo } = this.state
    const pages = this.fetchPageNumbers()

    return (
      <div className="pagination-container">
        <div className="info">
          {`Showing ${showingData} to ${showingTo} of ${this.totalRecords} entries`}
        </div>
        <div className="control">
          <ul className="pagination">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE) {
                return (
                  <li key={index} className="waves-effect">
                    <div
                      className="button-page"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <i className="material-icons">chevron_left</i>
                    </div>
                  </li>
                )
              }

              if (page === RIGHT_PAGE) {
                return (
                  <li key={index} className="waves-effect">
                    <div
                      className="button-page"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <i className="material-icons">chevron_right</i>
                    </div>
                  </li>
                )
              }

              return (
                <li
                  key={index}
                  className={`waves-effect${
                    currentPage === page ? ' active' : ''
                  }`}
                >
                  <div
                    style={{ cursor: 'pointer' }}
                    className="button-page"
                    onClick={(e) => this.handleClick(page, e)}
                  >
                    {page}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
}

export default Pagination
