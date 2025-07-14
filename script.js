async function getData() {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      console.log(data); // Inspect structure
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  }
  
  getData();
  const container = document.querySelector('#data-container');
  const fact = document.createElement('p');
  fact.textContent = data.fact;
  container.appendChild(fact);

  
  catch (error) {
    const errorMsg = document.createElement('p');
    errorMsg.textContent = "Something went wrong. Please try again later.";
    container.appendChild(errorMsg);
  }
      