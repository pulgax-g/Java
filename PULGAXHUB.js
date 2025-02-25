(() => {
    // Crear una ventana flotante
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.right = "10px";
    container.style.width = "350px";
    container.style.height = "300px";
    container.style.backgroundImage = "url('https://i.ytimg.com/vi/N_g-UKrm0UI/hq720.jpg')";
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
    container.style.border = "1px solid white";
    container.style.padding = "10px";
    container.style.zIndex = "10000";
    container.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.8)";
    container.style.color = "white";
    container.style.borderRadius = "10px";
    container.style.cursor = "grab";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.opacity = "0";
    container.style.transition = "opacity 0.5s ease-in-out, height 0.3s ease-in-out";

    setTimeout(() => { container.style.opacity = "1"; }, 100);

    let isDragging = false;
    let offsetX, offsetY;

    const startDrag = (e) => {
        isDragging = true;
        offsetX = (e.touches ? e.touches[0].clientX : e.clientX) - container.offsetLeft;
        offsetY = (e.touches ? e.touches[0].clientY : e.clientY) - container.offsetTop;
    };

    const doDrag = (e) => {
        if (isDragging) {
            container.style.left = `${(e.touches ? e.touches[0].clientX : e.clientX) - offsetX}px`;
            container.style.top = `${(e.touches ? e.touches[0].clientY : e.clientY) - offsetY}px`;
            container.style.right = "auto";
        }
    };

    const stopDrag = () => {
        isDragging = false;
    };

    container.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
    
    container.addEventListener("touchstart", startDrag);
    document.addEventListener("touchmove", doDrag);
    document.addEventListener("touchend", stopDrag);

    // Encabezado con logo, título y botones
    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "space-between";
    header.style.width = "100%";
    header.style.marginBottom = "10px";
    header.style.background = "rgba(0, 0, 0, 0.6)";
    header.style.padding = "5px";
    header.style.borderRadius = "5px";

    // Contenedor de logo y título
    const titleContainer = document.createElement("div");
    titleContainer.style.display = "flex";
    titleContainer.style.alignItems = "center";
    titleContainer.style.gap = "10px"; 

    // Logo cuadrado
    const logo = document.createElement("img");
    logo.src = "https://i.blogs.es/d225d6/skibidi-toilet-wiki/650_1200.jpeg";
    logo.style.width = "30px";
    logo.style.height = "30px";
    logo.style.borderRadius = "5px";
    titleContainer.appendChild(logo);

    // Título
    const title = document.createElement("div");
    title.innerText = "Pulgax Executor";
    title.style.fontWeight = "bold";
    title.style.fontSize = "16px";
    titleContainer.appendChild(title);

    header.appendChild(titleContainer);

    // Contenedor de botones minimizar y cerrar
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "5px";

    const createButton = (text, onClick) => {
        const button = document.createElement("button");
        button.innerText = text;
        button.style.padding = "5px 10px";
        button.style.fontSize = "12px";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.background = "#444";
        button.style.color = "white";
        button.style.cursor = "pointer";
        button.style.transition = "background 0.3s";
        button.onmouseover = () => { button.style.background = "#666"; };
        button.onmouseout = () => { button.style.background = "#444"; };
        button.onclick = onClick;
        return button;
    };

    // Botón para minimizar con animación
    const minimizeButton = createButton("−", () => {
        if (container.style.height === "40px") {
            container.style.height = "300px";
            setTimeout(() => {
                textarea.style.opacity = "1";
                executeButton.style.opacity = "1";
                clearButton.style.opacity = "1";
            }, 100);
        } else {
            textarea.style.opacity = "0";
            executeButton.style.opacity = "0";
            clearButton.style.opacity = "0";
            setTimeout(() => {
                container.style.height = "40px";
            }, 300);
        }
    });
    buttonContainer.appendChild(minimizeButton);

    // Botón para cerrar la ventana
    const closeButton = createButton("X", () => {
        document.body.removeChild(container);
    });
    buttonContainer.appendChild(closeButton);

    header.appendChild(buttonContainer);
    container.appendChild(header);

    // Crear un área de texto más grande
    const textarea = document.createElement("textarea");
    textarea.style.width = "100%";
    textarea.style.height = "180px";
    textarea.style.background = "rgba(0, 0, 0, 0.7)";
    textarea.style.color = "white";
    textarea.style.border = "1px solid white";
    textarea.style.borderRadius = "5px";
    textarea.style.fontSize = "14px";
    textarea.style.fontFamily = "monospace";
    textarea.style.transition = "opacity 0.3s ease-in-out";
    textarea.placeholder = "Escribe código JavaScript aquí...";
    container.appendChild(textarea);

    // Contenedor de botones de ejecución y limpieza
    const actionButtons = document.createElement("div");
    actionButtons.style.display = "flex";
    actionButtons.style.justifyContent = "space-between";
    actionButtons.style.marginTop = "10px";

    // Botón para ejecutar código
    const executeButton = createButton("Ejecutar", () => {
        try {
            const result = eval(textarea.value);
            alert("Resultado: " + result);
        } catch (error) {
            alert("Error: " + error.message);
        }
    });
    executeButton.style.padding = "10px 20px";
    executeButton.style.fontSize = "14px";
    actionButtons.appendChild(executeButton);

    // Botón para limpiar el código
    const clearButton = createButton("Limpiar", () => {
        textarea.value = "";
    });
    clearButton.style.padding = "10px 20px";
    clearButton.style.fontSize = "14px";
    actionButtons.appendChild(clearButton);

    container.appendChild(actionButtons);

    // Agregar la ventana flotante al cuerpo del documento
    document.body.appendChild(container);
})();
