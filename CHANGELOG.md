# Changelog

All notable changes to this project will be documented in this file.

## v0.2.3 - 2026-03-27

### Added
- Added a multi-screen homepage hero with one-screen-at-a-time scrolling.
- Added a dedicated `Coding Cafe Agenda` page in the main navigation.
- Added richer calendar views with month, week, and day layouts plus event modals.
- Added explicit `startTime` and `endTime` support for shared event data.

### Changed
- Split Coding Cafe content so `/cafe` works as a slide-based introduction and `/cafe-agenda` handles the event overview.
- Restyled the homepage, Coding Cafe pages, and footer to better match the current LUMC visual language.
- Updated navbar active-state styling to use a dark LUMC blue underline.
- Reworked Coding Cafe agenda cards to follow the reference layout from the archived design while keeping LUMC colors and typography.
- Updated agenda cards to render event tags from `coding-cafe-events.json`.
- Updated calendar week/day placement to use explicit event start and end times.

### Fixed
- Fixed agenda and session links after moving the agenda route to `/cafe-agenda`.
- Fixed calendar header alignment for the `Prev / date / Next` controls.
- Removed unused agenda card CSS that triggered Svelte warnings.
