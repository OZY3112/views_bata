import React from 'react'

export default function LandingPage({setSearchTerm, onSearch}) {
  return (
    <section id="landing">
            <header>
                <div className="landing__container">
                    <div className="landing__description">
                        <h1 className="landing__description--title">America's most awarded online streaming platform</h1>
                        <h2 className="landing__description--sub-title">Find your dream show with <span className="blue">Easy View</span></h2>
                        <div className="landing__form" >
                            <input
                                type="text"
                                placeholder="Search by title"
                                className="landing__description--input"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyUp={(e) => e.key === 'Enter' && onSearch()} />
                            <div className="landing__search-btn" onClick={() => onSearch()}>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
  )
}
