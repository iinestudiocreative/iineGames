/**
 * DEBUG POSITION TOOL — Temporaire
 * Ajoute un panneau de contrôle pour ajuster le centrage horizontal
 * des sections EasyTrip et Snake360.
 * 
 * À SUPPRIMER après utilisation.
 */
(function () {
    window.addEventListener('load', () => {
        // Create debug panel
        const panel = document.createElement('div');
        panel.id = 'debug-panel';
        panel.innerHTML = `
            <style>
                #debug-panel {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0,0,0,0.95);
                    color: #39ff14;
                    font-family: monospace;
                    font-size: 13px;
                    padding: 15px 25px;
                    z-index: 99999;
                    border-top: 2px solid #39ff14;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    align-items: center;
                }
                #debug-panel .debug-group {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                #debug-panel label {
                    color: #aaa;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                #debug-panel input[type="range"] {
                    width: 200px;
                    accent-color: #39ff14;
                }
                #debug-panel .value {
                    color: #fff;
                    font-weight: bold;
                    font-size: 14px;
                }
                #debug-panel .info-box {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    color: #fff;
                    line-height: 1.5;
                }
                #debug-panel button {
                    background: #9d00ff;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-family: monospace;
                    font-weight: bold;
                }
                #debug-panel button:hover {
                    background: #b033ff;
                }
                #debug-close {
                    position: absolute;
                    top: 5px;
                    right: 10px;
                    background: none !important;
                    color: #666 !important;
                    font-size: 18px;
                    padding: 2px 6px !important;
                }
            </style>
            <button id="debug-close">✕</button>

            <div class="debug-group">
                <label>🎯 EasyTrip — Padding Left</label>
                <input type="range" id="et-pad-left" min="0" max="200" value="80">
                <span class="value" id="et-pad-left-val">80px</span>
            </div>

            <div class="debug-group">
                <label>🎯 EasyTrip — Padding Right</label>
                <input type="range" id="et-pad-right" min="0" max="200" value="80">
                <span class="value" id="et-pad-right-val">80px</span>
            </div>

            <div class="debug-group">
                <label>🐍 Snake360 — Padding Left</label>
                <input type="range" id="sn-pad-left" min="0" max="200" value="80">
                <span class="value" id="sn-pad-right-val2">80px</span>
            </div>

            <div class="debug-group">
                <label>🐍 Snake360 — Padding Right</label>
                <input type="range" id="sn-pad-right" min="0" max="200" value="80">
                <span class="value" id="sn-pad-right-val">80px</span>
            </div>

            <div class="info-box" id="debug-info">
                Fenêtre: <span id="win-size">--</span><br>
                EasyTrip container: <span id="et-offset">--</span><br>
                Snake360 container: <span id="sn-offset">--</span>
            </div>

            <button id="debug-copy">📋 Copier les valeurs</button>
        `;
        document.body.appendChild(panel);

        // Get sections
        function getSections() {
            const allSections = document.querySelectorAll('.game-section');
            let etSection = null, snSection = null;
            allSections.forEach(s => {
                if (s.classList.contains('easytrip-bg')) etSection = s;
                if (s.classList.contains('snake-bg')) snSection = s;
            });
            return { etSection, snSection };
        }

        function getContainer(section) {
            return section ? section.querySelector('.container') : null;
        }

        function updateInfo() {
            const { etSection, snSection } = getSections();
            const etContainer = getContainer(etSection);
            const snContainer = getContainer(snSection);

            document.getElementById('win-size').textContent =
                `${window.innerWidth} x ${window.innerHeight}`;

            if (etContainer) {
                const rect = etContainer.getBoundingClientRect();
                const cs = window.getComputedStyle(etContainer);
                document.getElementById('et-offset').textContent =
                    `left:${Math.round(rect.left)}px | width:${Math.round(rect.width)}px | pad: ${cs.paddingLeft}/${cs.paddingRight}`;
            }

            if (snContainer) {
                const rect = snContainer.getBoundingClientRect();
                const cs = window.getComputedStyle(snContainer);
                document.getElementById('sn-offset').textContent =
                    `left:${Math.round(rect.left)}px | width:${Math.round(rect.width)}px | pad: ${cs.paddingLeft}/${cs.paddingRight}`;
            }
        }

        // Slider handlers
        function bindSlider(sliderId, valId, applyFn) {
            const slider = document.getElementById(sliderId);
            const valEl = document.getElementById(valId);
            slider.addEventListener('input', () => {
                valEl.textContent = slider.value + 'px';
                applyFn(parseInt(slider.value));
                updateInfo();
            });
        }

        bindSlider('et-pad-left', 'et-pad-left-val', (v) => {
            const c = getContainer(getSections().etSection);
            if (c) c.style.paddingLeft = v + 'px';
        });

        bindSlider('et-pad-right', 'et-pad-right-val', (v) => {
            const c = getContainer(getSections().etSection);
            if (c) c.style.paddingRight = v + 'px';
        });

        bindSlider('sn-pad-left', 'sn-pad-right-val2', (v) => {
            const c = getContainer(getSections().snSection);
            if (c) c.style.paddingLeft = v + 'px';
        });

        bindSlider('sn-pad-right', 'sn-pad-right-val', (v) => {
            const c = getContainer(getSections().snSection);
            if (c) c.style.paddingRight = v + 'px';
        });

        // Copy values
        document.getElementById('debug-copy').addEventListener('click', () => {
            const result = `
=== POSITION DEBUG ===
Fenêtre: ${window.innerWidth} x ${window.innerHeight}
EasyTrip  — padding-left: ${document.getElementById('et-pad-left').value}px | padding-right: ${document.getElementById('et-pad-right').value}px
Snake360  — padding-left: ${document.getElementById('sn-pad-left').value}px | padding-right: ${document.getElementById('sn-pad-right').value}px
${document.getElementById('et-offset').textContent}
${document.getElementById('sn-offset').textContent}
======================
            `.trim();
            navigator.clipboard.writeText(result);
            alert('Valeurs copiées ! Colle-les moi dans le chat.');
        });

        // Close
        document.getElementById('debug-close').addEventListener('click', () => {
            panel.remove();
        });

        // Update on resize
        window.addEventListener('resize', updateInfo);

        // Initial update after a short delay to let content render
        setTimeout(updateInfo, 500);
    });
})();
