import React, { useEffect, useRef, useState } from "react";
import Cauldron from "@/components/Cauldron";
import IngredientGrid from "@/components/IngredientGrid";
import TeacherDialog from "@/components/TeacherDialog";
import ControlsHUD from "@/components/ControlsHUD";
import { useGame } from "@/state/gameState";
import { playSfx } from "@/systems/audio";
import { screenFlash } from "@/systems/fx";
import { RECIPES } from "@/data/recipes";
