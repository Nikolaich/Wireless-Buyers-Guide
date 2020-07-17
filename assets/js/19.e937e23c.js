(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{373:function(e,i,t){"use strict";t.r(i);var r=t(25),v=Object(r.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mini-pcie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mini-pcie"}},[e._v("#")]),e._v(" Mini PCIe")]),e._v(" "),t("p",[e._v("So mini PCIe is most useful for users with older systems that don't have M.2 based wireless. With mini PCIe you have a couple of options:")]),e._v(" "),t("ul",[t("li",[e._v("Half Sized mini PCIe")]),e._v(" "),t("li",[e._v("Full sized mini PCIe")]),e._v(" "),t("li",[e._v("Apple Airport Card adapted to a full sized mini PCIe")])]),e._v(" "),t("p",[e._v("For older laptop users you'll generally be limited to half sized mini PCIe wireless cards due to space constraints but for desktop users, it's recommended to buy an Apple Airport Card with an adapter. The reason being is this avoids issues with PCI IDs not matching and not having drivers flags be set off, solutions are to force load the accompanying kext or modify the kext's PCI ID list to support your model.")]),e._v(" "),t("p",[e._v("The other thing to note with mini PCIe is that some vendors have a whitelist on wireless cards installed, speciifcally that only their brand of cards will work. The system "),t("strong",[e._v("won't even post")]),e._v(" with a non-branded one installed, the main culprits:")]),e._v(" "),t("ul",[t("li",[e._v("Lenovo(7th gen and older)")]),e._v(" "),t("li",[e._v("Toshiba")]),e._v(" "),t("li",[e._v("HP(3rd gen and older)")]),e._v(" "),t("li",[e._v("Compaq")])]),e._v(" "),t("p",[e._v("There are some work arounds with "),t("a",{attrs:{href:"https://medium.com/@p0358/removing-wlan-wwan-bios-whitelist-on-a-lenovo-laptop-to-use-a-custom-wi-fi-card-f6033a5a5e5a",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIOS mods"),t("OutboundLink")],1),e._v(", though be careful as poor patching can in fact "),t("strong",[e._v("brick your device")])]),e._v(" "),t("h1",{attrs:{id:"supported"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported"}},[e._v("#")]),e._v(" Supported")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("BCM94360HMB")]),e._v(" (ABGN+AC, BT 4.0, 3x3:3):")]),e._v(" "),t("ul",[t("li",[e._v("AzureWave AW-CB160H")]),e._v(" "),t("li",[e._v("Alpha Networks WMC-AC01")]),e._v(" "),t("li",[e._v("Arcadyan WN8833B-AC")]),e._v(" "),t("li",[e._v("Gemtek WMDB-150AC")]),e._v(" "),t("li",[e._v("Unex DAXB-81")]),e._v(" "),t("li",[e._v("Wistron NeWeb DNXB-C1")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("BCM94352HMB")]),e._v(" (ABGN+AC, BT 4.0, 2x2:2):")]),e._v(" "),t("ul",[t("li",[e._v("AzureWave AW-CE123H")]),e._v(" "),t("li",[e._v("Dell DW1550")]),e._v(" "),t("li",[e._v("HP TPC-Q013")]),e._v(" "),t("li",[e._v("Lenovo Lite-On WCBN606BH")])])])]),e._v(" "),t("p",[e._v("All cards presented here require the following:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("AirportBrcmFixup"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("BrcmPatchRAM"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("BrcmBluetoothInjector")]),e._v(" "),t("li",[e._v("BrcmFirmwareData")]),e._v(" "),t("li",[e._v("BrcmPatchRAM fix:\n"),t("ul",[t("li",[e._v("BrcmPatchRAM3 for 10.14+ (must be paired with BrcmBluetoothInjector)")]),e._v(" "),t("li",[e._v("BrcmPatchRAM2 for 10.11-10.14")]),e._v(" "),t("li",[e._v("BrcmPatchRAM for 10.10 or older")])])])])])]),e._v(" "),t("h1",{attrs:{id:"older-models-not-natively-supported-in-mojave"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#older-models-not-natively-supported-in-mojave"}},[e._v("#")]),e._v(" Older models(Not natively supported in Mojave)")]),e._v(" "),t("p",[e._v("With these models, you'll need to reinject the old plugin your wireless card used in High Sierra to work in Mojave. There are a couple of different kexts to do this but generally, we recommend avoiding these wireless cards.")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": Injecting the kext into macOS Catalina is even more unstable")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("BCM94322")]),e._v("4 HMS/HMB (ABGN, 2x2:2)")]),e._v(" "),t("ul",[t("li",[e._v("Dell DW1520")]),e._v(" "),t("li",[e._v("HP Gemtek WMIB-275N")]),e._v(" "),t("li",[e._v("Lenovo Gemtek WMIB-275N")]),e._v(" "),t("li",[e._v("Pegatron UPWL6024")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("AR9280")]),e._v(" (ABGN, 2x2:2)")]),e._v(" "),t("ul",[t("li",[e._v("Atheros AR5BHB92")]),e._v(" "),t("li",[e._v("Atheros AR5BXB92")]),e._v(" "),t("li",[e._v("AzureWave AW-NE772")]),e._v(" "),t("li",[e._v("AzureWave AW-NE773")]),e._v(" "),t("li",[e._v("Compex WLE200N5-23-ESD")]),e._v(" "),t("li",[e._v("Compex WLE200NX")]),e._v(" "),t("li",[e._v("Dell DW1515")]),e._v(" "),t("li",[e._v("HP U98Z044")]),e._v(" "),t("li",[e._v("HP Lite-On WN6502AH")]),e._v(" "),t("li",[e._v("Silex SX-PCEAN")]),e._v(" "),t("li",[e._v("SparkLAN WPEA-110N")]),e._v(" "),t("li",[e._v("SparkLAN WPEA-111N")]),e._v(" "),t("li",[e._v("Ubiquiti Networks SR71-E")]),e._v(" "),t("li",[e._v("Unex DNXA-92")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("AR9380")]),e._v(" (ABGN, 3x3:3)")]),e._v(" "),t("ul",[t("li",[e._v("Alpha Networks WMC-ND02")]),e._v(" "),t("li",[e._v("Killer Wireless-N 1103")]),e._v(" "),t("li",[e._v("Atheros AR5BHB112")]),e._v(" "),t("li",[e._v("Atheros AR5BXB112")]),e._v(" "),t("li",[e._v("Compex WLE300N5-22 7A0000")]),e._v(" "),t("li",[e._v("Compex WLE300NX 6A0000")]),e._v(" "),t("li",[e._v("HP U98Z081")]),e._v(" "),t("li",[e._v("JJPlus JWX6051")]),e._v(" "),t("li",[e._v("Lite-On WN6508A")]),e._v(" "),t("li",[e._v("SparkLAN WPEA-127N")]),e._v(" "),t("li",[e._v("SparkLAN WPEA-128N")]),e._v(" "),t("li",[e._v("Tehnoetic TET-N450DB")]),e._v(" "),t("li",[e._v("Vikings Atheros450")]),e._v(" "),t("li",[e._v("Wistron NeWeb DNXA-G1")])])])])])}),[],!1,null,null,null);i.default=v.exports}}]);