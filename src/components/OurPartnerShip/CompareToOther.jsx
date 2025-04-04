/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useId } from "react";

function CompareToOther({
  sectionTitle,
  sectionSubtitle,
  platformData,
  tableData,
  highlightedTexts,
  GreenHighlightedTexts,
  warningText = "",
}) {
  const [sectionCount, setSectionCount] = useState(0); 
  const uniqueId = useId();
  useEffect(() => {
    setSectionCount((prevCount) => prevCount + 1);
  }, []);
  console.log(highlightedTexts, GreenHighlightedTexts);
  const scrollLeft = (containerId) => {
    console.log(containerId);
    document.getElementById(containerId).scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = (containerId) => {
    console.log(containerId);
    document.getElementById(containerId).scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const syncColumnHeights = () => {
      const table1Rows = document.querySelectorAll(".table1 tbody tr");
      const table2Rows = document.querySelectorAll(".table2 tbody tr");
  
      // Reset all <td> heights before recalculating
      document.querySelectorAll("td").forEach(td => (td.style.height = "auto"));
  
      const maxCols = Math.max(
        ...[...table1Rows, ...table2Rows].map(row => row.children.length)
      );
  
      for (let colIndex = 0; colIndex < maxCols; colIndex++) {
        let maxHeight = 0;
        let tdElements = [];
  
        [...table1Rows, ...table2Rows].forEach(row => {
          const td = row.children[colIndex];
          if (td) {
            const height = td.getBoundingClientRect().height;
            maxHeight = Math.max(maxHeight, height);
            tdElements.push(td);
          }
        });
  
        tdElements.forEach(td => {
          td.style.height = `${maxHeight}px`;
        });
      }
    };
  
    // Run once on mount
    syncColumnHeights();
  
    // Add event listener to update on window resize
    window.addEventListener("resize", syncColumnHeights);
  
    return () => {
      window.removeEventListener("resize", syncColumnHeights);
    };
  }, []);
  
  
  
  
  
  
  
  
  return (
    <section className="compare-to-other">
      <div className="container mt-5">
        <div className="cs_tabs">
          <div className="cs_slider_heading_1">
            <div className="cs_section_heading cs_style_1">
              <h3
                className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10 "
                style={{ lineHeight: "19px" }}
              >
                <img
                  src="assets/img/icons/fan.svg"
                  alt=""
                  className="cs_section_subheading_icon"
                />
                {sectionSubtitle}
              </h3>
              <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 ms-2">
                {sectionTitle}
              </h2>
            </div>
          </div>
          <div className="cs_height_45 cs_height_lg_45"></div>
          <div className="cs_tab_body">
            <div className="cs_tab">
              <div className="row cs_gap_y_30 cs_row_gap_30">
                <div className="col-lg-3 col-md-6 col-6">
                  <div
                    className="cs_pricing_plan cs_style_1"
                    style={{ background: "#b8b7b74d", marginRight: "0rem" }}
                  >
                    <img
                      src="assets/img/shapes/price_shape.svg"
                      alt=""
                      className="cs_pricing_shape"
                    />
                    <div className="cs_pricing_plan_head">
                      <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">
                        {tableData.heading}
                      </h2>
                    </div>
                    <table className="table table-striped table1">
                      <tbody>
                        {tableData.list.map((item, i) => (
                          <tr key={i} className="table1-row">
                            <td>{item}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-6">
                  <div
                    id={`scroll-container-${uniqueId}`}
                    className="last-sec pricing-section-1"
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      scrollSnapType: "x mandatory",
                      scrollbarWidth: "none",
                    }}
                  >
                    {platformData.map((data, index) => (
                      <div
                        key={index}
                        className={"cs_pricing_plan cs_style_1"}
                        style={{ marginRight: "20px" }}
                      >
                        <img
                          src="assets/img/shapes/price_shape.svg"
                          alt=""
                          className="cs_pricing_shape"
                        />
                        <div className="cs_pricing_plan_head">
                          <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">
                            {data.platform}
                          </h2>
                        </div>
                        <table className="table table-striped table2">
                          <tbody>
                            {data.rows.map((row, i) => {
                              const words = row.split(/\s+/);
                              let combinedRow = [];
                              let index = 0;
                              while (index < words.length) {
                                const currentWord = words[index];
                                const nextWord = words[index + 1];
                                const combinedWord =
                                  currentWord + " " + nextWord;
                                const isHighlighted = highlightedTexts.some(
                                  (item) =>
                                    item.toLowerCase() ===
                                    combinedWord.toLowerCase()
                                );
                                const isGreenHighlighted =
                                  GreenHighlightedTexts.some(
                                    (item) =>
                                      item.toLowerCase() ===
                                      combinedWord.toLowerCase()
                                  );
                                if (isHighlighted || isGreenHighlighted) {
                                  combinedRow.push(
                                    <span
                                      key={index}
                                      className={
                                        isHighlighted
                                          ? "highlight-text"
                                          : "green-highlight-text"
                                      }
                                    >
                                      {combinedWord + " "}
                                    </span>
                                  );
                                  index += 2;
                                } else {
                                  const isSingleWordHighlighted =
                                    highlightedTexts.some(
                                      (item) =>
                                        item.toLowerCase() ===
                                        currentWord.toLowerCase()
                                    );
                                  const isSingleWordGreenHighlighted =
                                    GreenHighlightedTexts.some(
                                      (item) =>
                                        item.toLowerCase() ===
                                        currentWord.toLowerCase()
                                    );
                                  if (isSingleWordHighlighted) {
                                    combinedRow.push(
                                      <span
                                        key={index}
                                        className="highlight-text"
                                      >
                                        {currentWord + " "}
                                      </span>
                                    );
                                  } else if (isSingleWordGreenHighlighted) {
                                    combinedRow.push(
                                      <span
                                        key={index}
                                        className="green-highlight-text"
                                      >
                                        {currentWord + " "}
                                      </span>
                                    );
                                  } else {
                                    combinedRow.push(
                                      <span key={index}>
                                        {currentWord + " "}
                                      </span>
                                    );
                                  }
                                  index += 1;
                                }
                              }

                              return (
                                <tr key={`${index}-${i}`} className="table2-row">
                                  <td>{combinedRow}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                  {warningText ? (
                    <p>
                      <span style={{ color: "#ff3c00" }}>*</span>
                      {warningText}
                    </p>
                  ) : (
                    ""
                  )}
                  
                </div>
                <div className="controls">
                    <button
                      className="scroll-btn scroll-btn-left"
                      onClick={() => scrollLeft(`scroll-container-${uniqueId}`)}
                    >
                      <i className="bi bi-arrow-left-circle-fill"></i>
                    </button>
                    <button
                      className="scroll-btn scroll-btn-right"
                      onClick={() =>
                        scrollRight(`scroll-container-${uniqueId}`)
                      }
                    >
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
}

export default CompareToOther;
