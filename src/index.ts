import {
  installBat,
  installDelta,
  installDocker,
  installEza,
  installFfmpeg,
  installFirebase,
  installFzf,
  installGitHubCli,
  installJq,
  installLazygit,
  installNi,
  installRye,
  installSqlc,
  installStow,
  installTmux,
  installTree,
  installVolta,
  installXsel,
} from './installers';
import { createSymbolicLinks, logger, prepareForInstallation, readPassword, renderEnding, renderTitle } from './utils';

const main = async () => {
  console.clear();
  renderTitle();

  if (!(await readPassword())) {
    throw new Error('Please enter correct password.');
  }
  await prepareForInstallation();

  // Managers
  logger.info('\nManagers');
  await installRye();
  await installStow();
  await installVolta();

  // Commands
  logger.info('\nCommands');
  await installBat();
  await installDelta();
  await installEza();
  await installFfmpeg();
  await installFirebase();
  await installFzf();
  await installGitHubCli();
  await installJq();
  await installNi();
  await installSqlc();
  await installTree();
  await installXsel();

  // GUIs / TUIs
  logger.info('\nGUIs / TUIs');
  await installDocker();
  await installLazygit();
  await installTmux();

  // Symbolic link
  logger.info('\nSymbolic links');
  await createSymbolicLinks();

  renderEnding();
  process.exit(0);
};

main().catch((err) => {
  logger.error('Aborting installation...');
  if (err instanceof Error) {
    logger.error(err);
  } else {
    logger.error('An unknown error has occurred.');
  }
  process.exit(1);
});
