function changeScootyColor(color) {
    const scootyImage = document.getElementById('scootyImage');
    const colorName = document.getElementById('colorName');
    const imageSources = {
        'yellow': 'yellow scooty1.png',
        'matte red': 'matte red scooty.png',
        'blue': 'blue scooty.png',
        'black': 'black scooty.png',
    };
    scootyImage.src = imageSources[color] || 'yellow scooty1.png';
    colorName.textContent = `Color: ${color.charAt(0).toUpperCase() + color.slice(1)}`;
}
