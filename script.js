body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  padding: 30px;
  margin: 0;
}

.spectrum-box {
  background-color: #c2c2c2;
  border-radius: 10px;
  padding: 20px;
  margin: 25px 0;
  text-align: center;
}

.spectrum-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #756c80;
}

/* Toggles on either side of spectrum bar */
.spectrum-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.toggle {
  flex: 1;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
}

.toggle input[type="checkbox"] {
  margin-left: 6px;
  transform: scale(1.2);
  vertical-align: middle;
}

.toggle-left {
  text-align: right;
}

.toggle-right {
  text-align: left;
}

.spectrum-wrapper {
  flex: 3;
  text-align: center;
}

.spectrum-label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #33333;
}

/* Spectrum bar */
.spectrum-bar {
  position: relative;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(to right, #d3bceb, #8162a1, #462f5e);
  margin: 0 auto;
  cursor: pointer;
}

.spectrum-dot {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: #4CAF50;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: left 0.2s ease, background-color 0.2s ease;
}

/* Boxes below the bar */
.reflection-box, .ai-process-box {
  background-color: #c2c2c2;
  border-radius: 10px;
  padding: 20px;
  margin: 25px 0;
  text-align: center;
}

.reflection-box h3, .ai-process-box h3 {
  margin-top: 0;
  color: #333;
}

.reflection-question, .scenario-output {
  font-size: 16px;
  color: #444;
  background-color: #e8e8e8;
  padding: 15px;
  border-radius: 8px;
  text-align: left;
  margin-top: 15px;
}
