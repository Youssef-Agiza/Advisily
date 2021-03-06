import {
  OVERLOADING,
  OVERLOADING_CREDITS,
  PACE_ID,
  SEMESTERS_TO_PLAN,
  SUMMER_CREDITS,
  TAKING_SUMMER,
  TAKING_WINTER,
  WINTER_CREDITS,
} from "./fieldNames";

const preferencesDefaultValues = {
  [OVERLOADING]: "false",
  [TAKING_SUMMER]: "false",
  [TAKING_WINTER]: "false",
  [OVERLOADING_CREDITS]: 0,
  [SUMMER_CREDITS]: 0,
  [WINTER_CREDITS]: 0,
  [PACE_ID]: "1",
  [SEMESTERS_TO_PLAN]: "1",
};

export default preferencesDefaultValues;
