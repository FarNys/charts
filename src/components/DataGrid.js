import React, { useEffect } from "react";

const DataGrid = () => {
  //   useEffect(() => {
  //     setTimeout(async () => {
  //       const text = await navigator.clipboard.readText();
  //       console.log(text);
  //     }, 2000);
  //   }, []);
  //   async function getClipboardContents() {
  //     try {
  //       const text = await navigator.clipboard.readText();
  //       console.log("Pasted content: ", text);
  //     } catch (err) {
  //       console.error("Failed to read clipboard contents: ", err);
  //     }
  //   }
  //   getClipboardContents();
  function handlePaste(e) {
    var clipboardData, pastedData;

    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();

    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData("Text");

    // Do whatever with pasteddata
    alert(pastedData);
  }
  useEffect(() => {
    document
      .getElementById("editableDiv")
      .addEventListener("paste", handlePaste);
  }, []);

  return (
    <div>
      DataGrid
      <input />
      <div id="editableDiv">Test</div>
    </div>
  );
};

export default DataGrid;
