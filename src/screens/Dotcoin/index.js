import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import BTC_Logo from "../../assets/svg/BTC.svg";
import ETH_Logo from "../../assets/svg/ethereum.svg"
import SOL_Logo from "../../assets/svg/solana-sol-logo.svg"
import XRP_Logo from "../../assets/svg/XRP.svg"
import DOGE_Logo from "../../assets/svg/dogecoin.svg"
const Dotcoin = () => {
    const [symbolData] = useState({
        symbol: "BTCUSD",
    });

    const textAreaStyle = {
        width: 'calc(100%)',
        height: '300px', 
        border: '5px solid #ccc', 
        padding: '10px', 
        boxSizing: 'border-box', 
        resize: 'none', 
        borderRadius: '15px',
        backgroundColor: '#242731',
        fontSize: '12px',
    };

    

    const pineScriptCode = `//@version=5
    indicator("DotCoin-PredictiveAI", overlay = true, precision = 0, explicit_plot_zorder = true, max_labels_count = 500)

    sensitivity = input.string("Low", "Sensitivity", ["Low", "Medium", "High"])
    suppRes = input.bool(false, "Support & Resistance")
    breaks = input.bool(false, "Breaks")
    usePsar = input.bool(false, "PSAR")
    emaEnergy = input.bool(true, "EMA Energy")
    channelBal = input.bool(true, "Channel Balance")
    autoTL = input.bool(false, "Auto Trend Lines")
    // Functions
    supertrend(_src, factor, atrLen) =>
atr = ta.atr(atrLen)
upperBand = _src + factor * atr
lowerBand = _src - factor * atr
prevLowerBand = nz(lowerBand[1])
prevUpperBand = nz(upperBand[1])
lowerBand:= lowerBand > prevLowerBand or close[1] < prevLowerBand ? lowerBand : prevLowerBand
upperBand:= upperBand < prevUpperBand or close[1] > prevUpperBand ? upperBand : prevUpperBand
	int direction = na
	float superTrend = na
prevSuperTrend = superTrend[1]
if na(atr[1])
		direction:= 1
else if prevSuperTrend == prevUpperBand
		direction:= close > upperBand ? -1 : 1
else
    direction:= close < lowerBand ? 1 : -1
superTrend:= direction == -1 ? lowerBand : upperBand
[superTrend, direction]
lr_slope(_src, _len) =>
x = 0.0, y = 0.0, x2 = 0.0, xy = 0.0
for i = 0 to _len - 1
        val = _src[i]
per = i + 1
x += per
y += val
x2 += per * per
xy += val * per
_slp = (_len * xy - x * y) / (_len * x2 - x * x)
_avg = y / _len
_int = _avg - _slp * x / _len + _slp
[_slp, _avg, _int]
lr_dev(_src, _len, _slp, _avg, _int) =>
upDev = 0.0, dnDev = 0.0
val = _int
for j = 0 to _len - 1
        price = high[j] - val
if price > upDev
            upDev:= price
price:= val - low[j]
if price > dnDev
            dnDev:= price
price:= _src[j]
val += _slp
[upDev, dnDev]
// Get Components
ocAvg = math.avg(open, close)
sma1 = ta.sma(close, 5)
sma2 = ta.sma(close, 6)
sma3 = ta.sma(close, 7)
sma4 = ta.sma(close, 8)
sma5 = ta.sma(close, 9)
sma6 = ta.sma(close, 10)
sma7 = ta.sma(close, 11)
sma8 = ta.sma(close, 12)
sma9 = ta.sma(close, 13)
sma10 = ta.sma(close, 14)
sma11 = ta.sma(close, 15)
sma12 = ta.sma(close, 16)
sma13 = ta.sma(close, 17)
sma14 = ta.sma(close, 18)
sma15 = ta.sma(close, 19)
sma16 = ta.sma(close, 20)
psar = ta.sar(0.02, 0.02, 0.2)
[middleKC1, upperKC1, lowerKC1] = ta.kc(close, 80, 10.5)
[middleKC2, upperKC2, lowerKC2] = ta.kc(close, 80, 9.5)
[middleKC3, upperKC3, lowerKC3] = ta.kc(close, 80, 8)
[middleKC4, upperKC4, lowerKC4] = ta.kc(close, 80, 3)
[supertrend, direction] = supertrend(close, sensitivity == "Low" ? 5 : sensitivity == "Medium" ? 2.5 : 2, 11)
barsL = 10
barsR = 10
pivotHigh = fixnan(ta.pivothigh(barsL, barsR)[1])
pivotLow = fixnan(ta.pivotlow(barsL, barsR)[1])
source = close, period = 150
[s, a, i] = lr_slope(source, period)
[upDev, dnDev] = lr_dev(source, period, s, a, i)
// Colors
green = #2BBC4D, green2 = #00DD00
red = #C51D0B, red2 = #DD0000
emaEnergyColor(ma) => emaEnergy ? (close >= ma ? green : red) : na
// Plots
k1 = plot(ta.ema(upperKC1, 50), "", na, editable = false)
k2 = plot(ta.ema(upperKC2, 50), "", na, editable = false)
k3 = plot(ta.ema(upperKC3, 50), "", na, editable = false)
k4 = plot(ta.ema(upperKC4, 50), "", na, editable = false)
k5 = plot(ta.ema(lowerKC4, 50), "", na, editable = false)
k6 = plot(ta.ema(lowerKC3, 50), "", na, editable = false)
k7 = plot(ta.ema(lowerKC2, 50), "", na, editable = false)
k8 = plot(ta.ema(lowerKC1, 50), "", na, editable = false)
fill(k1, k2, channelBal ? color.new(red2, 40) : na, editable = false)
fill(k2, k3, channelBal ? color.new(red2, 65) : na, editable = false)
fill(k3, k4, channelBal ? color.new(red2, 90) : na, editable = false)
fill(k5, k6, channelBal ? color.new(green2, 90) : na, editable = false)
fill(k6, k7, channelBal ? color.new(green2, 65) : na, editable = false)
fill(k7, k8, channelBal ? color.new(green2, 40) : na, editable = false)
plot(sma1, "", emaEnergyColor(sma1), editable = false)
plot(sma2, "", emaEnergyColor(sma2), editable = false)
plot(sma3, "", emaEnergyColor(sma3), editable = false)
plot(sma4, "", emaEnergyColor(sma4), editable = false)
plot(sma5, "", emaEnergyColor(sma5), editable = false)
plot(sma6, "", emaEnergyColor(sma6), editable = false)
plot(sma7, "", emaEnergyColor(sma7), editable = false)
plot(sma8, "", emaEnergyColor(sma8), editable = false)
plot(sma9, "", emaEnergyColor(sma9), editable = false)
plot(sma10, "", emaEnergyColor(sma10), editable = false)
plot(sma11, "", emaEnergyColor(sma11), editable = false)
plot(sma12, "", emaEnergyColor(sma12), editable = false)
plot(sma13, "", emaEnergyColor(sma13), editable = false)
plot(sma14, "", emaEnergyColor(sma14), editable = false)
plot(sma15, "", emaEnergyColor(sma15), editable = false)
plot(sma16, "", emaEnergyColor(sma16), editable = false)
barcolor(close > supertrend ? #2BE300 : red2)
p3 = plot(ocAvg, "", na, editable = false)
p4 = plot(psar, "PSAR", usePsar ? (close > psar ? green : red) : na, 1, plot.style_circles, editable = false)
fill(p3, p4, usePsar ? (close > psar ? color.new(green, 90) : color.new(red, 90)) : na, editable = false)
y1 = low - (ta.atr(30) * 2), y1B = low - ta.atr(30)
y2 = high + (ta.atr(30) * 2), y2B = high + ta.atr(30)
bull = ta.crossover(close, supertrend) and close >= sma9
bear = ta.crossunder(close, supertrend) and close <= sma9
buy = bull ? label.new(bar_index, y1, "BUY", xloc.bar_index, yloc.price, #2BE300, label.style_label_up, color.white) : na
sell = bear ? label.new(bar_index, y2, "SELL", xloc.bar_index, yloc.price, red2, label.style_label_down, color.white) : na
plot(pivotHigh, "Resistance", not suppRes or ta.change(pivotHigh) ? na : red, 2, offset = -(barsR + 1), editable = false)
plot(pivotLow, "Support", not suppRes or ta.change(pivotLow) ? na : green, 2, offset = -(barsR + 1), editable = false)
upB = breaks and ta.crossover(close, pivotHigh) ? label.new(bar_index, y1B, "B", xloc.bar_index, yloc.price, green, label.style_label_up, color.white, size.small) : na
dnB = breaks and ta.crossunder(close, pivotLow) ? label.new(bar_index, y2B, "B", xloc.bar_index, yloc.price, red, label.style_label_down, color.white, size.small) : na
x1 = bar_index - period + 1, _y1 = i + s * (period - 1), x2 = bar_index, _y2 = i
upperTL = autoTL ? line.new(x1, _y1 + upDev, x2, _y2 + upDev, xloc.bar_index, extend.none, red) : na
line.delete(upperTL[1])
middleTL = autoTL ? line.new(x1, _y1, x2, _y2, xloc.bar_index, extend.none, color.white) : na
line.delete(middleTL[1])
lowerTL = autoTL ? line.new(x1, _y1 - dnDev, x2, _y2 - dnDev, xloc.bar_index, extend.none, green) : na
line.delete(lowerTL[1])
// Alerts
// alertcondition(bull or bear or ta.crossover(close, pivotHigh) or ta.crossunder(close, pivotLow), "Alert Any", "DotCoin-PredictiveAI\nAlert Triggered on {{ticker}} @ {{close}}")
// alertcondition(bull, "Alert Buy", "DotCoin-PredictiveAI\nBuy {{ticker}} @ {{close}}")
// alertcondition(bear, "Alert Sell", "DotCoin-PredictiveAI\nSell {{ticker}} @ {{close}}")
// alertcondition(ta.crossover(close, pivotHigh), "Broke Resistance", "DotCoin-PredictiveAI\nBroke Resistance on {{ticker}} @ {{close}}")
// alertcondition(ta.crossunder(close, pivotLow), "Broke Support", "DotCoin-PredictiveAI\nBroke Support on {{ticker}} @ {{close}}")`;

    const handleCopyClick = () => {
        const el = document.createElement('textarea');
        el.value = pineScriptCode;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("API Key copied!");
    };
    

    return (
        <PageLayout activeMenu={"Dotcoin AI"}>
            <div className="flex items-center mb-10 absolute ml-5">
                <div className="flex justify-center gap-20 mb-20 mt-10 w-full h-[1120px]">
                    <div className="bg-[#242731] flex flex-col gap-8 w-[750px] text-white mr-10 font-bold rounded-2xl">
                        <div className="">
                            {symbolData.symbol === "BTCUSD" && (
                                <div className="flex flex-col gap-5 m-5">
                                    <h6 className="text-lg font-medium"><textarea
                                        style={textAreaStyle}
                                        value={pineScriptCode}
                                        readOnly
                                    /></h6>
                                    <div className="flex justify-center">
                                        <div className="flex space-x-20">
                                            <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg"
                                                onClick={handleCopyClick}>
                                                Copy API Key
                                            </button>
                                            <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg">
                                                Trading View
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button className="bg-[#1F2128] text-white w-[134px] h-16 rounded-lg flex flex-col items-start justify-center px-4">
                                            <div className="flex items-center">
                                                <img src={BTC_Logo} alt="BTC Logo" className="w-10 h-10 mr-2" />
                                                <div>
                                                    <div className="text-left text-sm font-normal w-[282px] text-[#fff]">
                                                        <span className="font-medium">BTC</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </button>
                                        <button className="bg-[#1F2128] text-white w-[134px] h-16 rounded-lg flex flex-col items-start justify-center px-4">
                                            <div className="flex items-center">
                                                <img src={ETH_Logo} alt="BTC Logo" className="w-10 h-10 mr-2" />
                                                <div>
                                                    <div className="text-left text-sm font-normal w-[282px] text-[#fff]">
                                                        <span className="font-medium">ETH</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </button>
                                        <button className="bg-[#1F2128] text-white w-[134px] h-16 rounded-lg flex flex-col items-start justify-center px-4">
                                            <div className="flex items-center">
                                                <img src={SOL_Logo} alt="BTC Logo" className="w-10 h-10 mr-2" />
                                                <div>
                                                    <div className="text-left text-sm font-normal w-[282px] text-[#fff]">
                                                        <span className="font-medium">SOL</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </button>
                                        <button className="bg-[#1F2128] text-white w-[134px] h-16 rounded-lg flex flex-col items-start justify-center px-4">
                                            <div className="flex items-center">
                                                <img src={XRP_Logo} alt="BTC Logo" className="w-10 h-10 mr-2" />
                                                <div>
                                                    <div className="text-left text-sm font-normal w-[282px] text-[#fff]">
                                                        <span className="font-medium">XRP</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </button>
                                        <button className="bg-[#1F2128] text-white w-[134px] h-16 rounded-lg flex flex-col items-start justify-center px-4">
                                            <div className="flex items-center">
                                                <img src={DOGE_Logo} alt="BTC Logo" className="w-10 h-10 mr-2" />
                                                <div>
                                                    <div className="text-left text-sm font-normal w-[282px] text-[#fff]">
                                                        <span className="font-medium">DOGE</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </button>
                                    </div>





                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            
        </PageLayout>
    );
};
export default Dotcoin;
